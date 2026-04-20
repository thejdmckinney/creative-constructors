'use client'

import Link from 'next/link'
import { BookingData } from '../BookingWizard'

interface BookingConfirmationProps {
  bookingData: BookingData
  onReset: () => void
}

export default function BookingConfirmation({ bookingData, onReset }: BookingConfirmationProps) {
  const event = bookingData.scheduledEvent

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-3xl md:text-5xl font-black font-barlow-condensed text-navy mb-4">
        Your Consultation is Confirmed!
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        We are excited to discuss your project and help bring your vision to life.
      </p>

      {/* Confirmation Details */}
      {event && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8 border-2 border-gray-200 text-left">
          <h3 className="font-bold text-navy mb-4 text-center">Appointment Details</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="font-semibold text-navy">Date & Time</div>
                <div className="text-gray-600">{new Date(event.startTime).toLocaleString()}</div>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="font-semibold text-navy">Service</div>
                <div className="text-gray-600">{bookingData.service?.name}</div>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div>
                <div className="font-semibold text-navy">Property Type</div>
                <div className="text-gray-600 capitalize">{bookingData.propertyType}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* What Happens Next */}
      <div className="bg-navy text-white rounded-lg p-6 mb-8 text-left">
        <h3 className="font-bold mb-4 text-xl">What Happens Next?</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
              1
            </div>
            <div>
              <div className="font-semibold mb-1">Check Your Email</div>
              <div className="text-gray-300 text-sm">
                You will receive a confirmation email with calendar invite and appointment details.
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
              2
            </div>
            <div>
              <div className="font-semibold mb-1">We Review Your Project</div>
              <div className="text-gray-300 text-sm">
                Our team will review your project description and prepare for your consultation.
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
              3
            </div>
            <div>
              <div className="font-semibold mb-1">Expert Consultation</div>
              <div className="text-gray-300 text-sm">
                We will contact you at your scheduled time via your preferred method ({bookingData.contactMethod}).
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
              4
            </div>
            <div>
              <div className="font-semibold mb-1">Get Your Quote</div>
              <div className="text-gray-300 text-sm">
                After our discussion, we will provide a detailed quote and timeline for your project.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Checklist */}
      <div className="bg-orange/5 border-2 border-orange/20 rounded-lg p-6 mb-8 text-left">
        <h3 className="font-bold text-navy mb-4">📋 Prepare for Your Consultation</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Have photos of the area ready (if applicable)</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Note any specific questions or concerns you have</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Know your budget range and timeline preferences</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Be in a quiet place where you can discuss details</span>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-navy/90 transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/gallery"
          className="inline-block bg-white text-navy border-2 border-navy px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
        >
          View Our Work
        </Link>
        <button
          onClick={onReset}
          className="inline-block bg-white text-gray-600 border-2 border-gray-300 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
        >
          Book Another Service
        </button>
      </div>

      {/* Contact Info */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200">
        <p className="text-gray-600 mb-2">Need to reschedule or have questions?</p>
        <p className="font-bold text-navy">
          Call us at <a href="tel:+18174701889" className="text-orange hover:underline">(817) 470-1889</a>
        </p>
      </div>
    </div>
  )
}
