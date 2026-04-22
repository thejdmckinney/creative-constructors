import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, plan } = body;

    // Validate required fields
    if (!name || !email || !phone || !address || !plan) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const planDetails = plan === 'annual' 
      ? { price: '$2,688/year', period: 'Annual (Save $288)', stripeLink: 'https://buy.stripe.com/cNi3cueHv9tQ8nE1pjgEg01' }
      : { price: '$249/month', period: 'Monthly', stripeLink: 'https://buy.stripe.com/00w7sK0QF8pMbzQ6JDgEg00' };

    // Send to CrewOpsPro
    try {
      const crewOpsPayload = {
        org_slug: 'creative-constructors',
        name: name,
        email: email,
        phone: phone,
        service_type: 'Home Shield Subscription',
        notes: `Home Shield Sign-up\n\nPlan: ${planDetails.period} (${planDetails.price})\nAddress: ${address}\n\nQuarterly visits include:\n- Q1: Electrical Safety Walk\n- Q2: Plumbing Inspection\n- Q3: HVAC Assessment\n- Q4: Crawlspace & Attic Check\n\nBenefits:\n- Direct access to Jeremy between visits\n- Written home health reports with photos\n- Priority scheduling for repairs`,
        lead_source: 'home-shield-landing'
      };

      console.log('Sending to CrewOpsPro:', JSON.stringify(crewOpsPayload, null, 2));

      const crewOpsResponse = await fetch(
        'https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/public-lead-intake',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(crewOpsPayload)
        }
      );

      console.log('CrewOpsPro response status:', crewOpsResponse.status);

      if (!crewOpsResponse.ok) {
        const errorText = await crewOpsResponse.text();
        console.error('CrewOpsPro API error:', errorText);
      } else {
        const responseData = await crewOpsResponse.json();
        console.log('CrewOpsPro success:', responseData);
      }
    } catch (crewOpsError) {
      console.error('Error sending to CrewOpsPro:', crewOpsError);
      // Continue even if CrewOpsPro fails
    }

    // Send email notification to Jeremy
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder") {
      try {
        await resend.emails.send({
          from: "Creative Constructors <contact@creative-constructors.com>",
          to: ["info@creative-constructors.com"],
          replyTo: email,
          subject: `🛡️ New Home Shield Sign-up - ${planDetails.period}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e3a8a; border-bottom: 3px solid #f97316; padding-bottom: 10px;">
                🛡️ New Home Shield Member
              </h2>
              
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #f97316; margin-top: 0;">Customer Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
              </div>

              <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
                <h3 style="color: #1e3a8a; margin-top: 0;">Selected Plan</h3>
                <p style="font-size: 24px; font-weight: bold; color: #f97316; margin: 10px 0;">
                  ${planDetails.period}
                </p>
                <p style="font-size: 18px; color: #1e3a8a;">
                  ${planDetails.price}
                </p>
              </div>

              <div style="margin: 30px 0;">
                <h3 style="color: #1e3a8a;">Quarterly Visit Schedule</h3>
                <ul style="line-height: 1.8;">
                  <li><strong>Q1:</strong> Electrical Safety Walk</li>
                  <li><strong>Q2:</strong> Plumbing Inspection</li>
                  <li><strong>Q3:</strong> HVAC Assessment</li>
                  <li><strong>Q4:</strong> Crawlspace & Attic Check</li>
                </ul>
              </div>

              <div style="margin: 30px 0;">
                <h3 style="color: #1e3a8a;">Included Benefits</h3>
                <ul style="line-height: 1.8;">
                  <li>Direct access to Jeremy between visits (text/call anytime)</li>
                  <li>Written home health report with photos after each visit</li>
                  <li>Priority scheduling for all repairs and services</li>
                  <li>Member-only rates on additional work</li>
                </ul>
              </div>

              <div style="background: #dcfce7; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a; margin: 20px 0;">
                <p style="margin: 0; color: #166534;">
                  <strong>Next Step:</strong> Call ${name} at ${phone} within 24 hours to schedule their first quarterly visit and finalize payment setup.
                </p>
              </div>

              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                This lead has been automatically added to CrewOpsPro.
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Home Shield sign-up received successfully",
      stripePaymentUrl: planDetails.stripeLink
    });
  } catch (error) {
    console.error("Error processing Home Shield sign-up:", error);
    return NextResponse.json(
      { error: "Failed to process sign-up" },
      { status: 500 }
    );
  }
}
