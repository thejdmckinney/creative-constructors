'use client'

import { useState } from 'react'
import { BookingData } from '../BookingWizard'

interface ProjectDetailsProps {
  bookingData: BookingData
  onUpdate: (updates: Partial<BookingData>) => void
  onNext: () => void
  onBack: () => void
}

export default function ProjectDetails({ bookingData, onUpdate, onNext, onBack }: ProjectDetailsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!bookingData.propertyType) {
      newErrors.propertyType = 'Please select a property type'
    }
    if (!bookingData.urgency) {
      newErrors.urgency = 'Please select project urgency'
    }
    if (!bookingData.description.trim()) {
      newErrors.description = 'Please describe your project'
    }
    if (!bookingData.contactMethod) {
      newErrors.contactMethod = 'Please select a contact method'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onNext()
    }
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-navy mb-6 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to services
      </button>

      <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4">
        Tell us about your project
      </h2>
      <p className="text-gray-600 mb-8">
        The more details you provide, the better we can prepare for your consultation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-3">
            Property Type <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onUpdate({ propertyType: 'residential' })}
              className={`p-4 rounded-lg border-2 transition-all ${
                bookingData.propertyType === 'residential'
                  ? 'border-orange bg-orange/5'
                  : 'border-gray-200 hover:border-orange'
              }`}
            >
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-bold">Residential</div>
            </button>
            <button
              type="button"
              onClick={() => onUpdate({ propertyType: 'commercial' })}
              className={`p-4 rounded-lg border-2 transition-all ${
                bookingData.propertyType === 'commercial'
                  ? 'border-orange bg-orange/5'
                  : 'border-gray-200 hover:border-orange'
              }`}
            >
              <div className="text-2xl mb-2">🏢</div>
              <div className="font-bold">Commercial</div>
            </button>
          </div>
          {errors.propertyType && (
            <p className="mt-2 text-sm text-red-600">{errors.propertyType}</p>
          )}
        </div>

        {/* Project Urgency */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-3">
            When do you need this done? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {[
              { value: 'emergency', label: 'Emergency (Today)', icon: '🚨' },
              { value: 'this-week', label: 'This Week', icon: '📅' },
              { value: 'this-month', label: 'This Month', icon: '📆' },
              { value: 'planning', label: 'Planning Ahead', icon: '🗓️' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => onUpdate({ urgency: option.value as BookingData['urgency'] })}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center ${
                  bookingData.urgency === option.value
                    ? 'border-orange bg-orange/5'
                    : 'border-gray-200 hover:border-orange'
                }`}
              >
                <span className="text-2xl mr-3">{option.icon}</span>
                <span className="font-semibold">{option.label}</span>
              </button>
            ))}
          </div>
          {errors.urgency && <p className="mt-2 text-sm text-red-600">{errors.urgency}</p>}
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-navy mb-3">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            rows={5}
            value={bookingData.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            placeholder="Please describe what you need help with. Include any relevant details like dimensions, materials, timeline, etc."
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
              errors.description ? 'border-red-500' : 'border-gray-200 focus:border-orange'
            } focus:outline-none`}
          />
          {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-3">
            Preferred Contact Method <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'phone', label: 'Phone Call', icon: '📞' },
              { value: 'email', label: 'Email', icon: '✉️' },
              { value: 'text', label: 'Text/SMS', icon: '💬' },
            ].map((method) => (
              <button
                key={method.value}
                type="button"
                onClick={() => onUpdate({ contactMethod: method.value as BookingData['contactMethod'] })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  bookingData.contactMethod === method.value
                    ? 'border-orange bg-orange/5'
                    : 'border-gray-200 hover:border-orange'
                }`}
              >
                <div className="text-2xl mb-2">{method.icon}</div>
                <div className="font-semibold text-sm">{method.label}</div>
              </button>
            ))}
          </div>
          {errors.contactMethod && (
            <p className="mt-2 text-sm text-red-600">{errors.contactMethod}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 bg-orange text-white py-3 rounded-lg font-bold hover:bg-orange/90 transition-colors"
          >
            Continue to Calendar
          </button>
        </div>
      </form>
    </div>
  )
}
