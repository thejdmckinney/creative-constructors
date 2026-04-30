import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      companyName,
      projectType,
      timeline,
      message,
    } = body;

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "Creative Constructors <onboarding@resend.dev>",
      to: process.env.EMAIL_USER || "contact@creativeconstructors.com",
      subject: `🎨 New Interior Designer Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Interior Designer Contact</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Designer Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Name:</td>
                <td style="padding: 12px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 12px 0; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 12px 0; color: #1e293b;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ${
                companyName
                  ? `
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Company/Firm:</td>
                <td style="padding: 12px 0; color: #1e293b;">${companyName}</td>
              </tr>
              `
                  : ""
              }
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Project Type:</td>
                <td style="padding: 12px 0; color: #1e293b;">${projectType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Timeline:</td>
                <td style="padding: 12px 0; color: #1e293b;">${timeline}</td>
              </tr>
            </table>
            
            <div style="margin-top: 24px;">
              <h3 style="color: #1e3a8a; margin-bottom: 12px;">Project Details:</h3>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="background: #1e3a8a; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              🎨 Interior Designer Inquiry • Creative Constructors
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
