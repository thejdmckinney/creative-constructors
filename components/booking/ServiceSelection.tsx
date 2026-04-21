'use client'

import { ServiceType } from '../BookingWizard'

const services: ServiceType[] = [
  {
    id: 'emergency',
    name: 'Emergency Service',
    description: '2-hour response for urgent plumbing, electrical, or HVAC issues',
    icon: '🚨',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_EMERGENCY_URL || '',
    isEmergency: true,
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Leaks, fixtures, pipes, water heaters, and drain cleaning',
    icon: '🔧',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_PLUMBING_URL || '',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Wiring, outlets, switches, panels, and lighting installation',
    icon: '⚡',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_ELECTRICAL_URL || '',
  },
  {
    id: 'hvac',
    name: 'HVAC',
    description: 'Heating, cooling, ventilation, and air quality solutions',
    icon: '❄️',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_HVAC_URL || '',
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    description: 'Custom builds, repairs, trim work, and woodworking',
    icon: '🪚',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_CARPENTRY_URL || '',
  },
  {
    id: 'painting',
    name: 'Painting',
    description: 'Interior, exterior, cabinet refinishing, and color consulting',
    icon: '🎨',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_PAINTING_URL || '',
  },
  {
    id: 'flooring',
    name: 'Flooring',
    description: 'Installation, repair, refinishing for all floor types',
    icon: '📐',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_FLOORING_URL || '',
  },
  {
    id: 'installation',
    name: 'Installation',
    description: 'Fixtures, appliances, TV mounting, and smart home devices',
    icon: '🔩',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_INSTALLATION_URL || '',
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    description: 'Regular upkeep, preventive care, and seasonal tune-ups',
    icon: '🛠️',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_MAINTENANCE_URL || '',
  },
  {
    id: 'other',
    name: 'General Consultation',
    description: 'Not sure what you need? Let us discuss your project',
    icon: '💬',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_CONSULTATION_URL || '',
  },
]

interface ServiceSelectionProps {
  selectedService: ServiceType | null
  onSelectService: (service: ServiceType) => void
}

export default function ServiceSelection({ selectedService, onSelectService }: ServiceSelectionProps) {
  const handleSelectService = (service: ServiceType) => {
    if (!service.calendlyUrl) {
      alert('This service is not yet configured. Please select another service or contact us directly at (817) 470-1889.')
      return
    }
    onSelectService(service)
  }

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-black font-barlow-condensed text-navy mb-4">
        What service do you need?
      </h2>
      <p className="text-gray-600 mb-8">
        Select the service that best matches your project. We'll customize the consultation accordingly.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleSelectService(service)}
            className={`group relative p-6 rounded-xl border-2 transition-all text-left hover:shadow-lg ${
              service.isEmergency
                ? 'border-red-500 bg-red-50 hover:bg-red-100'
                : selectedService?.id === service.id
                ? 'border-orange bg-orange/5'
                : 'border-gray-200 hover:border-orange'
            }`}
          >
            {service.isEmergency && (
              <div className="absolute top-2 right-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                  URGENT
                </span>
              </div>
            )}

            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className={`text-xl font-bold font-barlow-condensed mb-2 ${
              service.isEmergency ? 'text-red-700' : 'text-navy'
            }`}>
              {service.name}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>

            <div className={`mt-4 flex items-center text-sm font-semibold ${
              service.isEmergency ? 'text-red-600' : 'text-orange'
            }`}>
              Select
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
