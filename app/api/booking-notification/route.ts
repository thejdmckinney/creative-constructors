import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingData, calendlyEvent } = body;

    // Validate required fields
    if (!bookingData || !bookingData.service) {
      return NextResponse.json(
        { error: "Missing required booking data" },
        { status: 400 }
      );
    }

    const {
      service,
      propertyType,
      urgency,
      description,
      contactMethod,
      scheduledEvent,
    } = bookingData;

    // Format the scheduled time
    const scheduledTime = scheduledEvent?.startTime 
      ? new Date(scheduledEvent.startTime).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          timeZoneName: 'short'
        })
      : 'Not scheduled yet';

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder") {
      try {
        await resend.emails.send({
          from: "Creative Constructors <contact@creative-constructors.com>",
          to: ["info@creative-constructors.com"],
          subject: `🎉 New Booking: ${service.name} - ${urgency?.replace('-', ' ').toUpperCase()}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
                  .content { background-color: #f9fafb; padding: 20px; }
                  .section { background-color: white; margin: 15px 0; padding: 15px; border-radius: 8px; border-left: 4px solid #f97316; }
                  .label { font-weight: bold; color: #1e3a8a; }
                  .value { margin-left: 10px; }
                  .emergency { background-color: #fef2f2; border-left-color: #dc2626; }
                  .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
                  .calendly-link { display: inline-block; margin-top: 10px; padding: 10px 20px; background-color: #f97316; color: white; text-decoration: none; border-radius: 6px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>📅 New Service Booking</h1>
                  </div>
                  
                  <div class="content">
                    ${service.isEmergency ? '<div class="section emergency"><p style="color: #dc2626; font-weight: bold;">🚨 EMERGENCY SERVICE REQUEST</p></div>' : ''}
                    
                    <div class="section">
                      <h2 style="color: #1e3a8a; margin-top: 0;">Service Details</h2>
                      <p><span class="label">Service:</span><span class="value">${service.name}</span></p>
                      <p><span class="label">Description:</span><span class="value">${service.description}</span></p>
                      <p><span class="label">Urgency:</span><span class="value">${urgency?.replace('-', ' ').toUpperCase() || 'Not specified'}</span></p>
                      <p><span class="label">Property Type:</span><span class="value">${propertyType?.toUpperCase() || 'Not specified'}</span></p>
                    </div>

                    <div class="section">
                      <h2 style="color: #1e3a8a; margin-top: 0;">Project Description</h2>
                      <p>${description || 'No description provided'}</p>
                    </div>

                    <div class="section">
                      <h2 style="color: #1e3a8a; margin-top: 0;">Scheduling Information</h2>
                      <p><span class="label">Scheduled Time:</span><span class="value">${scheduledTime}</span></p>
                      <p><span class="label">Preferred Contact Method:</span><span class="value">${contactMethod?.toUpperCase() || 'Not specified'}</span></p>
                      ${scheduledEvent?.eventUrl ? `
                        <p>
                          <a href="${scheduledEvent.eventUrl}" class="calendly-link" target="_blank">
                            View in Calendly →
                          </a>
                        </p>
                      ` : ''}
                    </div>

                    ${calendlyEvent ? `
                      <div class="section">
                        <h2 style="color: #1e3a8a; margin-top: 0;">Client Information</h2>
                        <p><span class="label">Name:</span><span class="value">${calendlyEvent.invitee?.name || 'Not provided'}</span></p>
                        <p><span class="label">Email:</span><span class="value">${calendlyEvent.invitee?.email || 'Not provided'}</span></p>
                        ${calendlyEvent.invitee?.questions_and_answers?.map((qa: any) => `
                          <p><span class="label">${qa.question}:</span><span class="value">${qa.answer}</span></p>
                        `).join('') || ''}
                      </div>
                    ` : ''}

                    <div class="section">
                      <h2 style="color: #1e3a8a; margin-top: 0;">Quick Actions</h2>
                      <p>
                        <a href="tel:8174701889" style="color: #f97316; text-decoration: none; font-weight: bold;">📞 Call: (817) 470-1889</a>
                      </p>
                      ${scheduledEvent?.inviteeUrl ? `
                        <p>
                          <a href="${scheduledEvent.inviteeUrl}" style="color: #f97316; text-decoration: none; font-weight: bold;" target="_blank">
                            📋 Invitee Details →
                          </a>
                        </p>
                      ` : ''}
                    </div>
                  </div>

                  <div class="footer">
                    <p>This booking was submitted through creative-constructors.com</p>
                    <p>Creative Constructors LLC | Dallas-Fort Worth Metroplex</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        console.log('Booking notification email sent successfully');
      } catch (emailError) {
        console.error("Error sending booking notification email:", emailError);
        // Don't fail the request if email fails - booking is still valid
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Booking notification sent successfully" 
    });
  } catch (error) {
    console.error("Error processing booking notification:", error);
    return NextResponse.json(
      { error: "Failed to process booking notification" },
      { status: 500 }
    );
  }
}
