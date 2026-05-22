/**
 * Analytics tracking utilities
 * Use these functions to track important user interactions
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void
    dataLayer?: any[]
  }
}

export function trackBooking(service: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'booking_completed', {
      event_category: 'engagement',
      event_label: service,
      value: value || 0,
    })
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'booking_completed',
      service: service,
      value: value || 0,
    })
  }
}

export function trackPhoneCall() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: 'phone_click',
    })
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_call',
    })
  }
}

export function trackFormSubmission(formName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'engagement',
      event_label: formName,
    })
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submission',
      form_name: formName,
    })
  }
}

export function trackEmailClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'engagement',
    })
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'email_click',
    })
  }
}

export function trackServiceView(serviceName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_service', {
      event_category: 'service',
      event_label: serviceName,
    })
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'view_service',
      service_name: serviceName,
    })
  }
}

export function trackCityView(cityName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_city', {
      event_category: 'location',
      event_label: cityName,
    })
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'view_city',
      city_name: cityName,
    })
  }
}
