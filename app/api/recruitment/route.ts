import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// 1. Zod Validation Schema
const recruitmentSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required").max(30),
  location: z.string().min(1, "Location is required").max(100),
  siaNumber: z.string().min(16, "SIA Number must be 16 characters").max(16),
  background: z.string().min(1, "Background is required"),
  portfolioLink: z.string().url("Must be a valid URL (LinkedIn or Secure Drive)").max(500),
});

// 2. Upstash Rate Limiting
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '60 s'), // 3 apps per minute
});

export async function POST(req: Request) {
  try {
    // 3. Rate Limit Check
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(`recruitment_${ip}`);

    if (!success) {
      return NextResponse.json({ message: 'Rate limit exceeded. Try again later.' }, { status: 429 });
    }

    const payload = await req.json();
    const parsedData = recruitmentSchema.safeParse(payload);

    if (!parsedData.success) {
      return NextResponse.json({ message: 'Validation failed', errors: parsedData.error.flatten() }, { status: 400 });
    }

    const { name, email, phone, location, siaNumber, background, portfolioLink } = parsedData.data;

    // 4. Nodemailer Transmission
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"D Trinity Recruitment" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
      subject: `[VETTING APP] ${name.toUpperCase()} - ${background}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #eee;">
          <h2 style="background: #0a0a0a; color: white; padding: 20px; margin: 0; text-transform: uppercase;">Operative Intake</h2>
          
          <div style="padding: 20px;">
            <h3 style="color: #881337; border-bottom: 1px solid #eee; padding-bottom: 10px;">01. Personal Intelligence</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Base Location:</strong> ${location}</p>

            <h3 style="color: #881337; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 30px;">02. Clearance & Service</h3>
            <p><strong>SIA License:</strong> ${siaNumber}</p>
            <p><strong>Primary Background:</strong> ${background}</p>

            <h3 style="color: #881337; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 30px;">03. Documentation</h3>
            <p><strong>Operations Link:</strong> <a href="${portfolioLink}" style="color: #0066cc;">${portfolioLink}</a></p>
          </div>

          <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 11px; color: #666;">
            System Reference: VET-${Math.floor(Math.random() * 10000)}<br>
            Processed securely via D Trinity Node.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error: unknown) {
    console.error('Recruitment API Error:', error);
    return NextResponse.json({ message: 'Transmission Failed.' }, { status: 500 });
  }
}