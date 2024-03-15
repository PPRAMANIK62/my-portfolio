import EmailTemplate from "@/components/EmailTemplate.jsx";
import { NextResponse } from "next/server.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  const firstName = name.split(" ")[0];

  try {
    const emails = ["purbayanpramanik62@gmail.com", email];

    const emailPromises = [...new Set(emails)].map((recipientEmail) => {
      return resend.emails.send({
        from,
        to: recipientEmail,
        subject,
        react: EmailTemplate({ firstName: firstName, message: message }),
      });
    });

    const responses = await Promise.all(emailPromises);

    return NextResponse.json({ status: 200, responses });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
