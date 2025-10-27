'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CalendlyModal from '@/components/CalendlyModal'
import { User, Users, Heart, Baby, Compass, CheckCircle, Calendar } from 'lucide-react'

export default function ServicesPage() {
  const [showCalendly, setShowCalendly] = useState(false)

  const services = [
    {
      icon: <User className="w-12 h-12" />,
      title: "Individual Therapy",
      description: "Personalized support to help you overcome challenges, build resilience, and discover your authentic self through evidence-based therapeutic approaches.",
      benefits: [
        "One-on-one personalized attention",
        "Confidential, safe therapeutic space",
        "Tailored treatment plans",
        "Evidence-based approaches",
        "Flexible scheduling options"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Therapy for Women",
      description: "Specialized support addressing women's unique experiences including life transitions, relationships, self-esteem, and personal empowerment.",
      benefits: [
        "Women's mental health specialization",
        "Life transition support",
        "Relationship and self-esteem work",
        "Work-life balance strategies",
        "Empowerment and personal growth"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Therapy for Children and Teens",
      description: "Age-appropriate counseling helping young people navigate emotions, build coping skills, and develop healthy patterns for lifelong wellbeing.",
      benefits: [
        "Age-appropriate therapeutic techniques",
        "Emotional regulation skills",
        "Academic and social support",
        "Family involvement as needed",
        "Building resilience and confidence"
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Couples Therapy",
      description: "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection with your partner.",
      benefits: [
        "Communication skills development",
        "Conflict resolution strategies",
        "Rebuilding trust and intimacy",
        "Strengthening emotional bonds",
        "Collaborative problem-solving"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: "Life Coaching",
      description: "Goal-oriented guidance to help you clarify your vision, overcome obstacles, and create actionable strategies for personal and professional growth.",
      benefits: [
        "Goal setting and achievement",
        "Career and life transitions",
        "Personal development strategies",
        "Accountability and support",
        "Creating actionable plans"
      ],
      color: "from-amber-500 to-amber-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onBookClick={() => setShowCalendly(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive therapeutic support tailored to your unique journey
          </p>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition inline-flex items-center text-lg font-medium shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                index % 2 === 0 ? 'md:grid md:grid-cols-2' : 'md:grid md:grid-cols-2'
              }`}
            >
              <div className={`bg-gradient-to-br ${service.color} p-12 text-white flex items-center justify-center ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <div className="text-center">
                  <div className="mb-6 inline-block">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {service.title}
                  </h2>
                </div>
              </div>
              <div className="p-12">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect:</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition font-medium"
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Take the first step toward living your best life
          </p>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg font-medium inline-flex items-center shadow-xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Your Consultation
          </button>
        </div>
      </section>

      <Footer />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  )
}