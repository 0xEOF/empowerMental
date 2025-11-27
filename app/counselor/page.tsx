'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CalendlyModal from '@/components/CalendlyModal'
import { GraduationCap, Award, Globe, Heart, Calendar } from 'lucide-react'

export default function CounselorPage() {
  const [showCalendly, setShowCalendly] = useState(false)

  const credentials = [
    {
      icon: <Award className="w-6 h-6" />,
      text: "Licensed Mental Health Counselor (LMHC)"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "Graduate Specialization in Counseling and Psychology"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Certified Life Coach"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Multicultural Experience: USA, Cuba, Costa Rica, Europe, Scandinavia"
    }
  ]

  const experiences = [
    "Teacher & College Professor",
    "University Advisor",
    "Public Speaker",
    "School Counselor",
    "Addictions Counselor",
    "Neurodivergent Counselor",
    "Community Mental Health Specialist",
    "Private Practice Psychotherapist",
    "Hospital-Based Counseling",
    "Community Center Programs"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onBookClick={() => setShowCalendly(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Your Counselor
          </h1>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Background
              </h2>
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I am a Licensed Mental Health Counselor and Life Coach with many years of dedicated 
                  service to individuals, children, and families. My experiences include working in schools, 
                  hospitals, community centers and private practice.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  As a teacher, college professor, university advisor, speaker, school counselor, addictions 
                  and neurodivergent counselor, working in private and community mental health services, I have 
                  had the opportunity to support individuals and couples with a wide range of experiences.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  My graduate studies specialize in Counseling and Psychology. My academic work and personal 
                  life experiences have provided me with valuable lessons, and a better understanding of the 
                  effects challenging (at times unexpected) situations can have on an individual, and the mental 
                  resilience required to surpass them.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/barbara_headshot.jpg" 
                    alt="Professional counselor"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <p className="text-sm text-gray-600 mb-1">Licensed Counselor</p>
                  <p className="text-3xl font-bold text-teal-600">10+ Years</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Credentials & Qualifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl">
                  <div className="text-teal-600 mr-4 mt-1">
                    {credential.icon}
                  </div>
                  <p className="text-gray-800 font-medium">{credential.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Areas */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Diverse Professional Experience
            </h3>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto text-lg">
              Throughout my career, I've had the opportunity to support individuals and couples 
              with a wide range of experiences across various settings
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-800 font-medium">{exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              My Therapeutic Philosophy
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In addition to my home in America, I've lived in Cuba, Costa Rica, with family members 
                in Europe and Scandinavia. I understand the impact culture has in one's life, and bring 
                an open and inclusive perspective to therapy.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a psychotherapist and life coach, I provide a nonjudgmental, compassionate space, 
                weaving my knowledge and life's experiences to provide individuals with the support and 
                skills to improve their human experience.
              </p>
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl p-6 md:p-8 mb-6">
                <p className="text-xl text-gray-800 font-semibold text-center italic">
                  "My passion is to help others live their best life. All have the ability to heal 
                  and grow with support."
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I love to empower individuals to cultivate self-awareness, transform cognitive distortions, 
                and address trauma keeping one in limiting mental patterns. I provide a compassionate, safe 
                space where individuals can develop coping skills and build resilience in the face of change 
                and adversity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every person is different, so I take an integrative approach using holistic approaches and 
                evidence-based models. My goal is for people to feel supported, in a healing space where they 
                can heal, find their inner power and live their most authentic self.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative text-center rounded-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/cta-background.jpeg" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-teal-900/70"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Schedule a consultation today to discuss how we can work together toward your wellness goals
              </p>
              <button 
                onClick={() => setShowCalendly(true)}
                className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition text-lg font-medium inline-flex items-center shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your First Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  )
}