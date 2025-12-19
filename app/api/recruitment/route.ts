import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const siaNumber = formData.get('siaNumber') as string;
    const background = formData.get('background') as string;
    const file = formData.get('resume') as File | null;

    if (!file) {
      return NextResponse.json({ message: 'No CV uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // 1. LOGIN (As igwikejerome@gmail.com)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // Your Personal Gmail
        pass: process.env.SMTP_PASS, // Your Personal App Password
      },
    });

    // 2. SEND (To recruitment@dtrinitysecurity.com)
    await transporter.sendMail({
      from: `"D Trinity System" <${process.env.SMTP_USER}>`, 
      
      // DESTINATION: The Business Alias
      to: process.env.SMTP_TO_EMAIL, 
      
      replyTo: email, // Clicking reply goes to the Applicant
      subject: `[VETTING APPLICATION] ${name.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #881337; border-bottom: 2px solid #881337; padding-bottom: 10px;">New Operative Application</h2>
          
          <h3 style="background: #f4f4f4; padding: 10px;">01. Personal Intelligence</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>

          <h3 style="background: #f4f4f4; padding: 10px;">02. Clearance & Service</h3>
          <p><strong>SIA License:</strong> ${siaNumber}</p>
          <p><strong>Background:</strong> ${background}</p>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            System Reference: TRN-${Math.floor(Math.random() * 10000)}
          </p>
        </div>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error: any) {
    console.error('Email Error:', error);
    return NextResponse.json({ message: 'Transmission Failed.' }, { status: 500 });
  }
}