import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().max(30).optional(),
  subject: z.string().min(1, 'Subject is required').max(100),
  message: z.string().min(10, 'Message is too short').max(5000, 'Message is too long'),
});

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const ratelimit = (redisUrl && redisToken)
  ? new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '10 s'), // 5 requests per 10 seconds
  })
  : null;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';

    if (ratelimit) {
      const { success } = await ratelimit.limit(`contact_${ip}`);
      if (!success) {
        return NextResponse.json({ message: 'Too many requests' }, { status: 429 });
      }
    } else {
      console.warn('Rate limiting is disabled. Please set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.');
    }

    const rawData = await req.json();
    const parsedData = contactSchema.safeParse(rawData);

    if (!parsedData.success) {
      return NextResponse.json({ message: 'Invalid payload data', errors: parsedData.error.format() }, { status: 400 });
    }

    const { name, email, phone, subject, message } = parsedData.data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_STRING,
      to: process.env.SMTP_BOOKINGS_EMAIL,
      replyTo: email,
      subject: `New Inquiry: ${subject} - ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; background-color: #ffffff; margin: 0 auto;">
          <div style="background-color: #f8f9fa; border-bottom: 3px solid #D4AF37; padding: 25px; text-align: left;">
            <h2 style="color: #111827; font-size: 20px; margin: 0; letter-spacing: 1px; text-transform: uppercase;">D'Trinity Operations</h2>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0; text-transform: uppercase; font-weight: bold;">New Inquiry Dossier</p>
          </div>
          
          <div style="padding: 30px 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 100px;"><strong>Name</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Email</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Phone</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${phone || 'Not Provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Subject</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${subject}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <p style="color: #6b7280; font-size: 13px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #f3f4f6; padding-bottom: 8px;">Direct Message</p>
              <p style="color: #374151; line-height: 1.6; font-size: 15px; background: #f9fafb; padding: 15px; border-radius: 4px; border-left: 3px solid #D4AF37;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; color: #9ca3af; font-size: 11px; border-top: 1px solid #eaeaea;">
            This communication was routed securely via the D'Trinity interface.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'Failed' }, { status: 500 });
  }
}