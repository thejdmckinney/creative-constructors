import { Metadata } from 'next'
import { seoConfig } from '@/seo.config'
import BookingWizard from '@/components/BookingWizard'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Book a Service | Schedule Your Project Consultation',
  description:
    'Schedule a free consultation with Creative Constructors. Expert handyman services across Dallas-Fort Worth. Licensed, insured, and ready to help with your next project.',
  openGraph: {
    title: 'Book a Service | Creative Constructors',
    description:
      'Schedule your free consultation today. Professional handyman services in Dallas-Fort Worth.',
    url: `${seoConfig.baseUrl}/book`,
  },
}

export default function BookPage() {
  const breadcrumbItems = [{ name: 'Book a Service', path: '/book' }]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-black font-barlow-condensed text-white mb-6">
                Schedule Your Project Consultation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Get expert advice and a free estimate for your home improvement project
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">500+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Same-Day Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Wizard */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <BookingWizard />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black font-barlow-condensed text-navy text-center mb-12">
                How It Works
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-black text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold font-barlow-condensed text-navy mb-4">
                    Choose Your Service & Time
                  </h3>
                  <p className="text-gray-600">
                    Select the service you need and pick a time that works best for your schedule.
                    We offer flexible booking options.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-black text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold font-barlow-condensed text-navy mb-4">
                    Free Consultation & Estimate
                  </h3>
                  <p className="text-gray-600">
                    We'll discuss your project, assess the work needed, and provide a detailed
                    estimate with no obligation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-black text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold font-barlow-condensed text-navy mb-4">
                    We Handle the Rest
                  </h3>
                  <p className="text-gray-600">
                    Once approved, we schedule the work at your convenience and complete it with
                    professional quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-black font-barlow-condensed text-navy text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <details className="bg-white rounded-lg shadow-md p-6 group">
                  <summary className="font-bold text-lg text-navy cursor-pointer flex justify-between items-center">
                    What happens after I book?
                    <svg
                      className="w-5 h-5 text-orange transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    You'll receive an immediate confirmation email with your appointment details. We'll
                    also send you a reminder 24 hours before your scheduled consultation. If you have
                    any questions before your appointment, you can reply to the confirmation email or
                    call us directly.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow-md p-6 group">
                  <summary className="font-bold text-lg text-navy cursor-pointer flex justify-between items-center">
                    Is there a charge for the consultation?
                    <svg
                      className="w-5 h-5 text-orange transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    No! All consultations and estimates are completely free with no obligation. We'll
                    assess your project, discuss options, and provide a detailed quote. You only pay if
                    you decide to move forward with the work.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow-md p-6 group">
                  <summary className="font-bold text-lg text-navy cursor-pointer flex justify-between items-center">
                    What if I need to reschedule?
                    <svg
                      className="w-5 h-5 text-orange transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    No problem! You can easily reschedule or cancel your appointment using the link in
                    your confirmation email. We ask that you provide at least 24 hours notice when
                    possible so we can offer that time to other clients.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow-md p-6 group">
                  <summary className="font-bold text-lg text-navy cursor-pointer flex justify-between items-center">
                    Do you offer emergency services?
                    <svg
                      className="w-5 h-5 text-orange transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Yes! For emergency situations like plumbing leaks, electrical issues, or HVAC
                    failures, select "Emergency Service" when booking. We offer priority scheduling and
                    aim to respond within 2 hours during business hours.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow-md p-6 group">
                  <summary className="font-bold text-lg text-navy cursor-pointer flex justify-between items-center">
                    What should I prepare before the consultation?
                    <svg
                      className="w-5 h-5 text-orange transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Have a clear idea of what you'd like done, any photos of the area/issue, and access
                    to relevant areas (electrical panel, water main, etc.). If you have any previous
                    estimates or specific product preferences, bring those along too. We'll handle the
                    rest!
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
