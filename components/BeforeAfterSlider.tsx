'use client'

import { useState } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  const handleInteractionStart = () => setIsDragging(true)
  const handleInteractionEnd = () => setIsDragging(false)

  return (
    <div
      className="relative w-full h-full select-none overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleInteractionEnd}
      onMouseDown={(e) => {
        // Allow clicking anywhere to reposition the slider immediately and begin dragging
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
        handleMove(e.clientX, rect)
        handleInteractionStart()
      }}
      onTouchStart={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
        handleMove(e.touches[0].clientX, rect)
        handleInteractionStart()
      }}
    >
      {/* After Image (Background) */}
      <div className="relative w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          {/* Left Arrow */}
          <svg
            className="w-4 h-4 text-navy absolute left-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {/* Right Arrow */}
          <svg
            className="w-4 h-4 text-navy absolute right-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-sm">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-sm">
        AFTER
      </div>
    </div>
  )
}
