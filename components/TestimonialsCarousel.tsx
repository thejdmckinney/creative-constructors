"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Margaret Fuller",
    location: "Dallas-Fort Worth, TX",
    rating: 5,
    date: "52 weeks ago",
    text: "Jeremy has done extensive electrical work for me and is very thorough and knowledgeable. He works hard until the job is complete; I plan to call him for all future jobs and would highly recommend him to others!",
    service: "Electrical Services",
  },
  {
    name: "Sarah Ngo",
    location: "Dallas-Fort Worth, TX",
    rating: 5,
    date: "36 weeks ago",
    text: "Jeremy is wonderful to work with. I was on a tight time crunch and we worked something out. His work is impeccable and he was able to fix everything and go above and beyond! Thank you!",
    service: "Repair Services",
  },
  {
    name: "Lara Gaither",
    location: "Dallas-Fort Worth, TX",
    rating: 5,
    date: "32 weeks ago",
    text: "Jeremy was great. Highly recommend. On time, quick, kind, knowledgeable, helpful.",
    service: "Professional Services",
  },
  {
    name: "Raeesa GQ",
    location: "Dallas-Fort Worth, TX",
    rating: 5,
    date: "31 weeks ago",
    text: "I needed help with hanging photo frames on a double height ceiling and door knobs changed. Jeremy was on time within his scheduled timeframe and I was impressed with his precision to details. He did a great job.",
    service: "Installation Services",
  },
  {
    name: "Sarah Johnson",
    location: "Plano, TX",
    rating: 5,
    date: "2 weeks ago",
    text: "Creative Constructors installed our new garage door opener and smart lighting throughout the house. The team was professional, on time, and the quality of work was outstanding. Highly recommend!",
    service: "Installation Services",
  },
  {
    name: "Michael Rodriguez",
    location: "Fort Worth, TX",
    rating: 5,
    date: "1 month ago",
    text: "Had electrical work done in our kitchen and they were fantastic. Same-day service, fair pricing, and they cleaned up everything when they were done. Will definitely use them again.",
    service: "Electrical Services",
  },
  {
    name: "Jennifer Lee",
    location: "Dallas, TX",
    rating: 5,
    date: "3 weeks ago",
    text: "We needed several repairs done around the house. From fixing our deck railing to repairing drywall, they handled it all professionally. Great communication and quality work throughout.",
    service: "Repair Services",
  },
  {
    name: "David Thompson",
    location: "Frisco, TX",
    rating: 5,
    date: "2 months ago",
    text: "Excellent service! They assembled our outdoor furniture and installed shelving in our garage. The installers were courteous, efficient, and made sure everything was perfect before leaving.",
    service: "Assembly Services",
  },
  {
    name: "Lisa Martinez",
    location: "Arlington, TX",
    rating: 5,
    date: "1 week ago",
    text: "Painted our living room and accent wall - looks amazing! The crew was meticulous with prep work and cleanup. They transformed our space and stayed within budget. Very impressed!",
    service: "Painting Services",
  },
  {
    name: "Robert Chen",
    location: "McKinney, TX",
    rating: 5,
    date: "3 weeks ago",
    text: "Called them for a faucet leak and they were able to come out same day. Fixed the issue quickly and checked all our other plumbing while they were here. True professionals!",
    service: "Maintenance Services",
  },
  {
    name: "Amanda White",
    location: "Carrollton, TX",
    rating: 5,
    date: "1 month ago",
    text: "Had smart home devices installed throughout our house. The technician explained everything clearly and made sure we knew how to use all the features. Couldn't be happier with the service!",
    service: "Smart Home Installation",
  },
  {
    name: "James Wilson",
    location: "Grapevine, TX",
    rating: 5,
    date: "2 weeks ago",
    text: "Repaired our fence after storm damage and it looks brand new. They matched the existing materials perfectly and completed the work faster than expected. Great value for the quality!",
    service: "Repair Services",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when manually navigating
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  // Show 3 testimonials at a time on desktop, 1 on mobile
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-orange fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-navy">4.7</span>
            </div>
            <p className="text-gray-600">
              Based on Google reviews from satisfied customers across Dallas-Fort Worth
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Mobile: Show only current testimonial */}
              <div className="md:hidden">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </div>

              {/* Desktop: Show 3 testimonials */}
              <div className="hidden md:contents">
                {visibleTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={`${currentIndex}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-navy p-3 rounded-full shadow-lg transition-all z-10 hidden md:block"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-navy p-3 rounded-full shadow-lg transition-all z-10 hidden md:block"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile Navigation Arrows */}
            <div className="flex justify-center gap-4 mb-6 md:hidden">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-100 text-navy p-3 rounded-full shadow-md transition-all"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-100 text-navy p-3 rounded-full shadow-md transition-all"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-orange w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Google Badge */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=creative+constructors+llc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-navy transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span className="font-medium">See all reviews on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-orange">
      {/* Header with Avatar and Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="flex-1">
          <div className="font-bold text-navy">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.location}</div>
        </div>
        <div className="text-sm text-gray-500">{testimonial.date}</div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-orange fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-3 leading-relaxed">{testimonial.text}</p>

      {/* Service Tag */}
      <div className="inline-block bg-royal-blue/10 text-royal-blue px-3 py-1 rounded-full text-sm font-medium">
        {testimonial.service}
      </div>
    </div>
  );
}
