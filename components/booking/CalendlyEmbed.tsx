'use client'

import { useEffect } from 'react'
import { BookingData } from '../BookingWizard'

interface CalendlyEmbedProps {
  bookingData: BookingData
  onScheduled: (event: any) => void
  onBack: () => void
}

declare global {
  interface Window {
    Calendly: any
  }
}

export default function CalendlyEmbed({ bookingData, onScheduled, onBack }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Listen for Calendly events
    const handleMessage = async (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          const eventData = e.data.payload
          
          // Send booking notification email
          try {
            await fetch('/api/booking-notification', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                bookingData,
                calendlyEvent: eventData,
              }),
            })
          } catch (error) {
            console.error('Error sending booking notification:', error)
            // Continue anyway - booking is still valid
          }
          
          onScheduled(eventData)
        }
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
      document.body.removeChild(script)
    }
  }, [onScheduled, bookingData])

  const calendlyUrl = bookingData.service?.calendlyUrl || ''

  // Build prefill parameters from booking data
  const prefillParams = new URLSearchParams({
    name: '',
    email: '',
    a1: bookingData.description || '',
    a2: `Property: ${bookingData.propertyType || 'Not specified'}`,
    a3: `Urgency: ${bookingData.urgency || 'Not specified'}`,
    a4: `Contact: ${bookingData.contactMethod || 'Not specified'}`,
  })

  const embedUrl = `${calendlyUrl}?${prefillParams.toString()}`

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-navy mb-6 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to project details
      </button>

      <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4">
        Choose Your Consultation Time
      </h2>
      <p className="text-gray-600 mb-8">
        Select a time that works best for you. We will review your project details and come prepared.
      </p>

      {/* Service Summary Card */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6 border-2 border-gray-200">
        <h3 className="font-bold text-navy mb-3">Your Request Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-semibold">{bookingData.service?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Property:</span>
            <span className="font-semibold capitalize">{bookingData.propertyType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Timeline:</span>
            <span className="font-semibold capitalize">{bookingData.urgency?.replace('-', ' ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Contact via:</span>
            <span className="font-semibold capitalize">{bookingData.contactMethod}</span>
          </div>
        </div>
      </div>

      {/* Calendly Embed */}
      <div 
        className="calendly-inline-widget w-full"
        data-url={embedUrl}
        style={{ minHeight: '700px', height: '100%' }}
      />

      {/* Emergency Note */}
      {bookingData.service?.isEmergency && (
        <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h4 className="font-bold text-red-900 mb-1">Emergency Service Selected</h4>
              <p className="text-sm text-red-800">
                For immediate emergencies, call us directly at <a href="tel:+18174701889" className="underline font-bold">(817) 470-1889</a> for 2-hour response time.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
