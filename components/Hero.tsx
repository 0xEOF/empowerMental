'use client'

import { Calendar, CalendarClock } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  onBookClick: () => void
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="EmpowerMENTAL Wellness Logo" 
                width={65} 
                height={65}
                className="w-14 h-14 mr-3"
              />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  EmpowerMENTAL
                </h1>
                <h2 className="text-3xl md:text-4xl font-light text-teal-600">
                  Wellness
                </h2>
              </div>
            </div>
            <p className="text-2xl text-gray-700 mb-4 font-medium">
              Empowering You to Live Your Best Life
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Professional counseling and therapeutic support for individuals, teens, couples, 
              and families. Over 25 years of compassionate, evidence-based care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookClick}
                className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition flex items-center justify-center text-lg font-medium shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <a 
                href="#about"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-50 transition text-center text-lg font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=800&fit=crop" 
                alt="Peaceful wellness setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center">
                <CalendarClock className="w-10 h-10 text-pink-500 mr-3" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">25+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}