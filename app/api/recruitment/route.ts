import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// 1. Zod Validation Schema (Updated to match the new frontend fields)
const recruitmentSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required").max(30),
  location: z.string().min(1, "Location is required").max(100),
});

// 2. Upstash Rate Limiting
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const ratelimit = (redisUrl && redisToken)
  ? new Ratelimit({
      redis: new Redis({
        url: redisUrl,
        token: redisToken,
      }),
      limiter: Ratelimit.slidingWindow(3, '60 s'), // 3 apps per minute
    })
  : null;

export async function POST(req: Request) {
  try {
    // 3. Rate Limit Check
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    
    if (ratelimit) {
      const { success } = await ratelimit.limit(`recruitment_${ip}`);
      if (!success) {
        return NextResponse.json({ message: 'Rate limit exceeded. Try again later.' }, { status: 429 });
      }
    } else {
      console.warn('Rate limiting bypassed. UPSTASH_KEYS are missing.');
    }

    // 4. Parse FormData instead of JSON
    const formData = await req.formData();
    
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
    };

    const file = formData.get("cvFile") as File | null;

    // 5. Validation
    const parsedData = recruitmentSchema.safeParse(payload);
    if (!parsedData.success) {
      return NextResponse.json({ message: 'Validation failed', errors: parsedData.error.flatten() }, { status: 400 });
    }

    if (!file) {
      return NextResponse.json({ message: 'CV/Document file is required.' }, { status: 400 });
    }

    const { name, email, phone, location } = parsedData.data;

    // 6. Convert File to Buffer for Nodemailer Attachment
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 7. Nodemailer Transmission
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_STRING,
      to: process.env.SMTP_RECRUITMENT_EMAIL,
      replyTo: email,
      subject: `New Candidate: ${name} - Operative Intake`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; background-color: #ffffff; margin: 0 auto;">
          <div style="background-color: #f8f9fa; border-bottom: 3px solid #D4AF37; padding: 25px; text-align: left;">
            <h2 style="color: #111827; font-size: 20px; margin: 0; letter-spacing: 1px; text-transform: uppercase;">D'Trinity Operations</h2>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0; text-transform: uppercase; font-weight: bold;">Operative Intake Application</p>
          </div>
          
          <div style="padding: 30px 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 120px;"><strong>Applicant</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Email</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Phone</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Location/Zip</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${location}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <p style="color: #6b7280; font-size: 13px; font-weight: bold; text-transform: uppercase; border-bottom: 2px solid #D4AF37; padding-bottom: 8px; display: inline-block;">Attached Documentation</p>
              <p style="color: #374151; font-size: 14px; margin-top: 10px;">
                The applicant has successfully uploaded their CV/Resume. It has been securely attached to this email.
              </p>
            </div>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; color: #9ca3af; font-size: 11px; border-top: 1px solid #eaeaea;">
            Applicant Reference Node: VET-${Math.floor(Math.random() * 10000)}<br />
            This vetting protocol was routed securely via the D'Trinity website interface.
          </div>
        </div>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        }
      ]
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error: unknown) {
    console.error('Recruitment API Error:', error);
    return NextResponse.json({ message: 'Transmission Failed.' }, { status: 500 });
  }
}