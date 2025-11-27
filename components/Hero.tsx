'use client'

import { Calendar } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  onBookClick: () => void
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Image 
                src="/logo.png" 
                alt="EmpowerMENTAL Wellness Logo" 
                width={65} 
                height={65}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mr-2 sm:mr-3"
              />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  EmpowerMENTAL
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-teal-600">
                  Wellness
                </h2>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 sm:mb-4 font-medium">
              Empowering You to Live Your Best Life
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Professional counseling and therapeutic support for individuals, teens, couples, 
              and families. Bringing many years of compassionate, evidence-based support to every client.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={onBookClick}
                className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-teal-700 transition flex items-center justify-center text-sm sm:text-base md:text-lg font-medium shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Schedule Consultation
              </button>
              <a 
                href="#about"
                className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-teal-50 transition text-center text-sm sm:text-base md:text-lg font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/hero-section.jpg" 
                alt="Peaceful wellness setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}