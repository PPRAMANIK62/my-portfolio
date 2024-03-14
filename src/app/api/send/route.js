import { Resend } from "resend";
import { EmailTemplate } from "../../../components/EmailTemplate.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = req.json();
  const { name, email, subject, message } = body;

  const firstName = name.split(" ")[0];

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["purbayanpramanik62@gmail.com", email],
      subject: subject,
      react: EmailTemplate({ firstName: firstName, message: message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
