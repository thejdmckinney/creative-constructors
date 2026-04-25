'use client'

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export default function WarrantyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    jobNumber: '',
    completionDate: '',
    issueDescription: '',
    photos: null as FileList | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/warranty-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit warranty claim');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        jobNumber: '',
        completionDate: '',
        issueDescription: '',
        photos: null,
      });
    } catch (error) {
      console.error('Error submitting warranty claim:', error);
      alert('There was an error submitting your claim. Please try again or call (817) 470-1889 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-black font-barlow-condensed text-navy mb-4">
              Warranty Claim Received
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for submitting your warranty claim. We will review your request and contact you within one (1) business day to schedule an assessment.
            </p>
            <div className="bg-orange/10 border-l-4 border-orange p-4 rounded mb-6">
              <p className="text-navy font-bold mb-1">Need immediate assistance?</p>
              <p className="text-gray-700">Call us at <a href="tel:817-470-1889" className="text-orange font-bold">(817) 470-1889</a></p>
            </div>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-navy hover:bg-royal-blue text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Submit Another Claim
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-orange/20 backdrop-blur-sm border border-orange/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange font-bold">🛡️ Our Commitment to Quality</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-barlow-condensed mb-4">
            Workmanship Warranty
          </h1>
          <p className="text-xl text-gray-300">
            Standing behind every project we complete
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Warranty Information */}
          <div>
            {/* Our Promise */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-black font-barlow-condensed text-navy mb-4">
                Our Promise to You
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Creative Constructors LLC stands behind the quality of every project we complete. This warranty is our commitment that the work performed at your property will meet industry standards and last as intended.
              </p>
            </div>

            {/* Warranty Coverage */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-black font-barlow-condensed text-navy mb-6">
                Warranty Coverage
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy mb-3">Coverage Period</h3>
                <p className="text-gray-700">
                  This warranty covers all labor and workmanship performed by Creative Constructors LLC for a period of <strong className="text-orange">one (1) year</strong> from the date of project completion, unless otherwise specified in writing.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy mb-3">What Is Covered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Defects in labor or workmanship directly related to work performed by Creative Constructors LLC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Failure of completed work to perform as intended under normal conditions of use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Improper installation or application that becomes apparent after project completion</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy mb-3">What Is Not Covered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Damage resulting from misuse, neglect, or lack of owner maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Damage caused by third parties or subsequent contractors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Normal wear and tear or natural weathering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Damage caused by acts of nature, including storms, flooding, or extreme temperature events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Material defects not resulting from our installation (manufacturer defects should be addressed directly with the manufacturer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Damage resulting from changes or modifications made by the owner or unauthorized parties after project completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span>Pre-existing conditions or structural issues not related to the scope of work performed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Materials Warranty */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-black font-barlow-condensed text-navy mb-4">
                Materials Warranty
              </h2>
              <p className="text-gray-700">
                Materials and products supplied by Creative Constructors LLC are subject to the manufacturer's warranty, where applicable. We will reasonably assist in facilitating a manufacturer warranty claim on materials we supplied, where possible.
              </p>
            </div>

            {/* Response Commitment */}
            <div className="bg-gradient-to-br from-orange/10 to-white rounded-2xl shadow-lg p-8 border-2 border-orange/20 mb-8">
              <h2 className="text-3xl font-black font-barlow-condensed text-navy mb-4">
                Our Response Commitment
              </h2>
              <p className="text-gray-700 mb-4">
                Upon receipt of a valid warranty claim, Creative Constructors LLC will:
              </p>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="bg-orange text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Acknowledge your claim and schedule an assessment visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-orange text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Evaluate the issue objectively and professionally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-orange text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Complete qualified repairs or remediation at no cost to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-orange text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span>Follow up to confirm the issue has been resolved to your satisfaction</span>
                </li>
              </ol>
              <div className="mt-6 bg-white/80 rounded-lg p-4 border border-orange/30">
                <p className="text-navy font-bold text-center">
                  We will respond within <span className="text-orange">one (1) business day</span> to schedule an initial assessment
                </p>
              </div>
            </div>

            {/* General Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-black font-barlow-condensed text-navy mb-6">
                General Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-navy mb-1">Warranty Transfer</h4>
                  <p>This warranty applies to the original customer and property only and is not transferable unless otherwise agreed to in writing.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Whole Agreement</h4>
                  <p>This warranty, together with the original contract and scope of work, constitutes the entire agreement between Creative Constructors LLC and the customer regarding warranty coverage for the project described above.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Governing Law</h4>
                  <p>This warranty shall be governed by the laws of the State of Texas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warranty Claim Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-4">
              <h2 className="text-3xl font-black font-barlow-condensed text-navy mb-2">
                File a Warranty Claim
              </h2>
              <p className="text-gray-600 mb-6">
                If you believe you have a valid warranty issue, please complete this form. We will respond within one business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="(817) 470-1889"
                  />
                </div>

                {/* Property Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-navy mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="1234 Main St, Fort Worth, TX 76102"
                  />
                </div>

                {/* Job Number */}
                <div>
                  <label htmlFor="jobNumber" className="block text-sm font-bold text-navy mb-2">
                    Original Job Number
                  </label>
                  <input
                    type="text"
                    id="jobNumber"
                    value={formData.jobNumber}
                    onChange={(e) => setFormData({ ...formData, jobNumber: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="If you have it"
                  />
                </div>

                {/* Completion Date */}
                <div>
                  <label htmlFor="completionDate" className="block text-sm font-bold text-navy mb-2">
                    Project Completion Date *
                  </label>
                  <input
                    type="date"
                    id="completionDate"
                    required
                    value={formData.completionDate}
                    onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                  />
                </div>

                {/* Issue Description */}
                <div>
                  <label htmlFor="issueDescription" className="block text-sm font-bold text-navy mb-2">
                    Description of Issue *
                  </label>
                  <textarea
                    id="issueDescription"
                    required
                    rows={5}
                    value={formData.issueDescription}
                    onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none transition-colors"
                    placeholder="Please describe the warranty issue in detail..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange hover:bg-orange/90 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Warranty Claim'
                  )}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Or call us directly at <a href="tel:817-470-1889" className="text-orange font-bold">(817) 470-1889</a>
                </p>
              </form>
            </div>

            {/* Contact Info Box */}
            <div className="bg-gradient-to-br from-navy to-royal-blue text-white rounded-2xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:817-470-1889" className="hover:text-orange transition-colors">(817) 470-1889</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:jeremy@creative-constructors.com" className="hover:text-orange transition-colors">jeremy@creative-constructors.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
