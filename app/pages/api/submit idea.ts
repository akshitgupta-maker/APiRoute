import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, rollNumber, branch, email, idea } = await req.json();

  // Send email to Isha
  await resend.emails.send({
    from: "SmartBox <onboarding@resend.dev>",
    to: "isha.gupta@chitkara.edu.in",
    subject: "New Idea Submission",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Roll Number:</strong> ${rollNumber}</p>
      <p><strong>Branch:</strong> ${branch}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Idea:</strong> ${idea}</p>
    `,
  });

  // Optionally save to DB or a JSON file for admin approval
  return NextResponse.json({ success: true });
}
