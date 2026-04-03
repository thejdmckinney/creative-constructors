import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// TODO: Add your Resend API key to environment variables
// Initialize with a placeholder key if not set (for build time)
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send lead to CrewOpsPro
    try {
      const crewOpsResponse = await fetch(
        'https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/public-lead-intake',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            org_slug: 'creative-constructors',
            name: name,
            email: email,
            phone: phone || null,
            service_type: service,
            notes: message,
            lead_source: 'website'
          })
        }
      );

      if (!crewOpsResponse.ok) {
        console.error('CrewOpsPro API error:', await crewOpsResponse.text());
      }
    } catch (crewOpsError) {
      console.error('Error sending to CrewOpsPro:', crewOpsError);
      // Continue even if CrewOpsPro fails - we'll still try to send email
    }

    // Optional: Send email notification via Resend (only if API key is configured)
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder") {
      try {
        await resend.emails.send({
          from: "Creative Constructors <contact@creative-constructors.com>",
          to: ["info@creative-constructors.com"],
          replyTo: email,
          subject: `New Contact Form Submission - ${service}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Continue even if email fails - lead is already in CrewOpsPro
      }
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
