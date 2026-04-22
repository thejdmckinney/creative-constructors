import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Creative Constructors LLC",
  description: "Terms of Service for Creative Constructors LLC - Legal terms and conditions for using our services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black font-barlow-condensed text-navy mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> April 21, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the services of Creative Constructors LLC ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p className="text-gray-700 mb-4">
              These Terms apply to all visitors, users, and customers who access or use our website, book our services, or subscribe to The Creative Constructors Home Shield program.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Services Provided</h2>
            <p className="text-gray-700 mb-4">
              Creative Constructors LLC provides professional handyman and home maintenance services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Emergency repair services</li>
              <li>Plumbing services</li>
              <li>Electrical services</li>
              <li>Smart home installation</li>
              <li>General repair and maintenance</li>
              <li>Installation services</li>
              <li>Assembly services</li>
              <li>Painting services</li>
              <li>HVAC services</li>
              <li>The Creative Constructors Home Shield subscription program</li>
            </ul>
            <p className="text-gray-700 mb-4">
              All services are provided in the Fort Worth, TX area and surrounding DFW metroplex.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Service Bookings and Appointments</h2>
            
            <h3 className="text-xl font-bold text-navy mb-3">3.1 Scheduling</h3>
            <p className="text-gray-700 mb-4">
              You may book services through our website, phone, or email. All appointments are subject to availability and confirmation by Creative Constructors LLC.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">3.2 Cancellations and Rescheduling</h3>
            <p className="text-gray-700 mb-4">
              If you need to cancel or reschedule an appointment, please notify us at least 24 hours in advance. Cancellations made less than 24 hours before the scheduled appointment may be subject to a cancellation fee.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">3.3 Access to Property</h3>
            <p className="text-gray-700 mb-4">
              You agree to provide safe and timely access to your property for scheduled services. If we are unable to access your property at the scheduled time, you may be charged a service call fee.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Pricing and Payment</h2>
            
            <h3 className="text-xl font-bold text-navy mb-3">4.1 Service Fees</h3>
            <p className="text-gray-700 mb-4">
              Pricing for services will be provided in advance through quotes or estimates. Final pricing may vary based on the actual scope of work required.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">4.2 Payment Terms</h3>
            <p className="text-gray-700 mb-4">
              Payment is due upon completion of services unless otherwise agreed upon in writing. We accept payment via cash, check, credit card, or online payment through Stripe.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">4.3 Emergency Services</h3>
            <p className="text-gray-700 mb-4">
              Emergency services may be subject to additional fees due to after-hours or expedited service requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">5. The Creative Constructors Home Shield</h2>
            
            <h3 className="text-xl font-bold text-navy mb-3">5.1 Subscription Terms</h3>
            <p className="text-gray-700 mb-4">
              The Home Shield program is a subscription-based preventive maintenance service available in two plans:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Monthly Plan:</strong> $249 per month, cancel anytime with 30 days notice</li>
              <li><strong>Annual Plan:</strong> $2,688 per year (save $288), paid in full upfront</li>
            </ul>

            <h3 className="text-xl font-bold text-navy mb-3">5.2 Services Included</h3>
            <p className="text-gray-700 mb-4">
              Home Shield members receive:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Four comprehensive quarterly visits (Electrical, Plumbing, HVAC, Crawlspace/Attic)</li>
              <li>On-the-spot small repairs included</li>
              <li>Quarterly maintenance tasks (HVAC filters, smoke detector batteries, etc.)</li>
              <li>15% discount on additional repairs</li>
              <li>Priority scheduling</li>
              <li>Direct access to Jeremy between visits</li>
              <li>Written reports with photos after each visit</li>
              <li>Annual members receive 1 free emergency service call per year</li>
            </ul>

            <h3 className="text-xl font-bold text-navy mb-3">5.3 Billing and Renewal</h3>
            <p className="text-gray-700 mb-4">
              Monthly subscriptions are billed automatically on the same day each month. Annual subscriptions are billed once per year. Subscriptions automatically renew unless cancelled in accordance with our cancellation policy.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">5.4 Cancellation Policy</h3>
            <p className="text-gray-700 mb-4">
              Monthly members may cancel at any time with 30 days written notice. Annual members may cancel with 30 days written notice, but no refunds will be provided for the remaining subscription period.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">5.5 Service Limitations</h3>
            <p className="text-gray-700 mb-4">
              Small repairs included in the Home Shield program are limited to minor fixes that can be completed during the scheduled visit (typically 15-30 minutes of work). Larger repairs will be quoted separately with the member discount applied.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">6. Warranties and Guarantees</h2>
            
            <h3 className="text-xl font-bold text-navy mb-3">6.1 Workmanship Guarantee</h3>
            <p className="text-gray-700 mb-4">
              We stand behind the quality of our work. If you are not satisfied with our workmanship, please contact us within 30 days of service completion, and we will work to make it right.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">6.2 Parts and Materials</h3>
            <p className="text-gray-700 mb-4">
              Parts and materials are warranted according to the manufacturer's warranty. We are not responsible for defects in materials or parts beyond our control.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">6.3 Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CREATIVE CONSTRUCTORS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-gray-700 mb-4">
              Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the amount you paid to us for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">8. Insurance and Licensing</h2>
            <p className="text-gray-700 mb-4">
              Creative Constructors LLC maintains appropriate liability insurance and complies with all applicable local, state, and federal licensing requirements for the services we provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">9. Property Damage</h2>
            <p className="text-gray-700 mb-4">
              While we take every precaution to protect your property, we are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Pre-existing damage or defects not caused by our services</li>
              <li>Damage resulting from hidden or unknown conditions</li>
              <li>Damage to property that is not properly maintained</li>
              <li>Normal wear and tear</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Any damage caused by our negligence will be addressed in accordance with our insurance policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">10. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of Creative Constructors LLC and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">11. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Creative Constructors LLC, its officers, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising out of your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-bold text-navy mb-3">12.1 Informal Resolution</h3>
            <p className="text-gray-700 mb-4">
              If you have a dispute with us, please contact us first to attempt to resolve the issue informally.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">12.2 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3">12.3 Jurisdiction</h3>
            <p className="text-gray-700 mb-4">
              Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Tarrant County, Texas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website and updating the "Effective Date" at the top. Your continued use of our services after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">14. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">15. Entire Agreement</h2>
            <p className="text-gray-700 mb-4">
              These Terms constitute the entire agreement between you and Creative Constructors LLC regarding our services and supersede all prior agreements and understandings, whether written or oral.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 border-l-4 border-orange p-6 rounded">
              <p className="text-navy font-bold mb-2">Creative Constructors LLC</p>
              <p className="text-gray-700">Phone: (817) 470-1889</p>
              <p className="text-gray-700">Email: info@creative-constructors.com</p>
              <p className="text-gray-700">Service Areas: Fort Worth, TX and surrounding DFW metroplex</p>
            </div>
          </section>

          <section className="mb-8">
            <p className="text-gray-600 italic">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
