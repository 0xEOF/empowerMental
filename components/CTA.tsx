'use client'

import { Calendar } from 'lucide-react'

interface CTAProps {
  onBookClick: () => void
}

export default function CTA({ onBookClick }: CTAProps) {
  return (
    <section className="relative py-20 px-4 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cta-background.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-teal-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Begin Your Healing Journey?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-95">
          Take the first step toward living your best life. Book a consultation today 
          and discover the power of compassionate, evidence-based therapy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onBookClick}
            className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg font-medium inline-flex items-center justify-center shadow-xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Consultation
          </button>
          <a 
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition text-lg font-medium inline-flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>
        <p className="mt-8 text-lg opacity-90">
          All have the ability to heal and grow with support
        </p>
      </div>
    </section>
  )
}