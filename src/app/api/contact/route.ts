import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    if (!resendApiKey || !toEmail) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const subject = `New portfolio contact from ${name}`;
    const html = `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


