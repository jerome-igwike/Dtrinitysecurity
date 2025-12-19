import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // igwikejerome@gmail.com
        pass: process.env.SMTP_PASS, 
      },
    });

    // TEMPORARY ROUTE: Sending to Recruitment since it works perfectly.
    // later we can change this to info@ or bookings@
    const DESTINATION_EMAIL = 'recruitment@dtrinitysecurity.com'; 

    await transporter.sendMail({
      from: `"D Trinity Contact" <${process.env.SMTP_USER}>`, 
      to: DESTINATION_EMAIL, 
      replyTo: email, 
      subject: `[WEBSITE INQUIRY] ${subject.toUpperCase()} - ${name}`,
      html: `
        <h3>New Inquiry via Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'Failed' }, { status: 500 });
  }
}