import { EmailTemplate } from "@/components/EmailTemplate.jsx";
import { NextResponse } from "next/server.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.FROM_EMAIL;

export async function POST(req) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  const firstName = name.split(" ")[0];

  try {
    const responses = await resend.emails.send({
      from,
      to: ["purbayanpramanik62@gmail.com", email],
      subject,
      react: EmailTemplate({ firstName, subject, message }),
    });

    return NextResponse.json({ status: 200, responses });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
