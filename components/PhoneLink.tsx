'use client'

/**
 * Phone Link Component with Call Tracking
 * Tracks phone clicks for analytics
 */
export default function PhoneLink({ 
  className = '',
  children,
  showIcon = false 
}: { 
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
}) {
  const phoneNumber = '+1-817-470-1889'
  const displayNumber = '(817) 470-1889'
  
  const handleClick = () => {
    // Track call click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call_click', {
        event_category: 'engagement',
        event_label: 'phone_call',
      })
    }
    
    // Track in dataLayer for GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'phone_call',
        category: 'engagement',
      })
    }
  }
  
  return (
    <a 
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className={className}
      itemProp="telephone"
    >
      {showIcon && '📞 '}
      {children || displayNumber}
    </a>
  )
}
