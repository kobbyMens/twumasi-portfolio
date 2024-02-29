import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!;

export async function POST(req: any, res: any) {
  const body = await req.json();

  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["kobimens12345@gmail.com", email],
      subject: subject,
      react: EmailTemplate({ message, subject }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
