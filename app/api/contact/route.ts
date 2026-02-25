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

    const DESTINATION_EMAIL = process.env.SMTP_TO_EMAIL || 'info@dtrinitysecurity.co';

    await transporter.sendMail({
      from: `"D Trinity Contact" <${process.env.SMTP_USER}>`,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: `[WEBSITE INQUIRY] ${subject.toUpperCase()} - ${name}`,
      html: `
        <h3>New Inquiry via Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'Failed' }, { status: 500 });
  }
}