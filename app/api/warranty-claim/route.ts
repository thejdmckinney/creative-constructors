import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, jobNumber, completionDate, issueDescription } = body;

    // Validate required fields
    if (!name || !email || !phone || !address || !completionDate || !issueDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email notification
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder") {
      try {
        await resend.emails.send({
          from: "Creative Constructors <contact@creative-constructors.com>",
          to: ["info@creative-constructors.com"],
          replyTo: email,
          subject: `🛡️ New Warranty Claim Submitted - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e3a8a; border-bottom: 3px solid #f97316; padding-bottom: 10px;">
                🛡️ New Warranty Claim
              </h2>
              
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #f97316; margin-top: 0;">Customer Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Property Address:</strong> ${address}</p>
              </div>

              <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; margin: 20px 0;">
                <h3 style="color: #1e3a8a; margin-top: 0;">Claim Details</h3>
                <p><strong>Job Number:</strong> ${jobNumber || 'Not provided'}</p>
                <p><strong>Project Completion Date:</strong> ${completionDate}</p>
              </div>

              <div style="margin: 30px 0;">
                <h3 style="color: #1e3a8a;">Issue Description</h3>
                <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                  <p style="margin: 0; white-space: pre-wrap;">${issueDescription}</p>
                </div>
              </div>

              <div style="background: #dcfce7; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a; margin: 20px 0;">
                <p style="margin: 0; color: #166534;">
                  <strong>Next Step:</strong> Contact ${name} at ${phone} within 1 business day to schedule an assessment visit.
                </p>
              </div>

              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Continue even if email fails
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Warranty claim submitted successfully" 
    });
  } catch (error) {
    console.error("Error processing warranty claim:", error);
    return NextResponse.json(
      { error: "Failed to process warranty claim" },
      { status: 500 }
    );
  }
}
