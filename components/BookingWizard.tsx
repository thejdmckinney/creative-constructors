'use client'

import { useState } from 'react'
import ServiceSelection from './booking/ServiceSelection'
import ProjectDetails from './booking/ProjectDetails'
import CalendlyEmbed from './booking/CalendlyEmbed'
import BookingConfirmation from './booking/BookingConfirmation'

type Step = 'service' | 'details' | 'calendar' | 'confirmation'

export type ServiceType = {
  id: string
  name: string
  description: string
  icon: string
  calendlyUrl: string
  isEmergency?: boolean
}

export type BookingData = {
  service: ServiceType | null
  propertyType: 'residential' | 'commercial' | ''
  urgency: 'emergency' | 'this-week' | 'this-month' | 'planning' | ''
  description: string
  photos: File[]
  contactMethod: 'phone' | 'email' | 'text' | ''
  scheduledEvent?: {
    eventUrl: string
    inviteeUrl: string
    startTime: string
    endTime: string
  }
}

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState<Step>('service')
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    propertyType: '',
    urgency: '',
    description: '',
    photos: [],
    contactMethod: '',
  })

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...updates }))
  }

  const goToStep = (step: Step) => {
    setCurrentStep(step)
  }

  const steps = [
    { id: 'service', name: 'Select Service', number: 1 },
    { id: 'details', name: 'Project Details', number: 2 },
    { id: 'calendar', name: 'Schedule Time', number: 3 },
    { id: 'confirmation', name: 'Confirmation', number: 4 },
  ]

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Steps */}
      {currentStep !== 'confirmation' && (
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.slice(0, 3).map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                      currentStepIndex >= index
                        ? 'bg-orange text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-2 text-sm font-semibold ${
                      currentStepIndex >= index ? 'text-navy' : 'text-gray-400'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < 2 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-colors ${
                      currentStepIndex > index ? 'bg-orange' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 ${currentStep === 'calendar' ? 'min-h-screen' : ''}`}>
        {currentStep === 'service' && (
          <ServiceSelection
            selectedService={bookingData.service}
            onSelectService={(service) => {
              updateBookingData({ service })
              goToStep('details')
            }}
          />
        )}

        {currentStep === 'details' && (
          <ProjectDetails
            bookingData={bookingData}
            onUpdate={updateBookingData}
            onNext={() => goToStep('calendar')}
            onBack={() => goToStep('service')}
          />
        )}

        {currentStep === 'calendar' && bookingData.service && (
          <CalendlyEmbed
            bookingData={bookingData}
            onScheduled={(eventData: any) => {
              updateBookingData({ scheduledEvent: eventData })
              goToStep('confirmation')
            }}
            onBack={() => goToStep('details')}
          />
        )}

        {currentStep === 'confirmation' && (
          <BookingConfirmation 
            bookingData={bookingData}
            onReset={() => {
              setBookingData({
                service: null,
                propertyType: '',
                urgency: '',
                description: '',
                photos: [],
                contactMethod: '',
              })
              goToStep('service')
            }}
          />
        )}
      </div>
    </div>
  )
}
