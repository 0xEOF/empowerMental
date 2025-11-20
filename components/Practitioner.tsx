// ============================================
// FILE: components/Practitioner.tsx
// ============================================
'use client'

import { GraduationCap, Award, Globe, Heart, Calendar } from 'lucide-react'

interface PractitionerProps {
  onBookClick: () => void
}

export default function Practitioner({ onBookClick }: PractitionerProps) {
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
    "School Counselor",
    "Addictions Counselor",
    "Neurodivergent Counselor",
    "Community Mental Health Specialist",
    "Private Practice Psychotherapist"
  ]

  return (
    <section id="practitioner" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your Counselor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 15 years of dedicated service to individuals, children, and families
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional Background
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a Licensed Mental Health Counselor and Life Coach, I have dedicated over 15 years 
                to supporting individuals, children, and families through their unique journeys. My 
                experiences span schools, hospitals, community centers, and private practice.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                My academic work and personal life experiences have provided me with valuable lessons 
                and a better understanding of the effects challenging situations can have on an individual, 
                and the mental resilience required to surpass them.
              </p>
              
              <div className="space-y-3 mb-6">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-purple-600 mr-3 mt-1">
                      {credential.icon}
                    </div>
                    <p className="text-gray-700">{credential.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=700&fit=crop" 
                  alt="Professional counselor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-sm text-gray-600 mb-1">Licensed Counselor</p>
                <p className="text-2xl font-bold text-purple-600">15+ Years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Diverse Professional Experience
          </h3>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Throughout my career, I've had the opportunity to support individuals and couples 
            with a wide range of experiences across various settings
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg text-center"
              >
                <p className="text-gray-800 font-medium">{exp}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 md:p-8">
            <p className="text-lg text-gray-800 italic text-center leading-relaxed">
              "In addition to my home in America, I've lived in Cuba, Costa Rica, with family members 
              in Europe and Scandinavia. I understand the impact culture has in one's life, and bring 
              an open and inclusive perspective to therapy. As a psychotherapist and life coach, I provide 
              a nonjudgmental, compassionate space, weaving my knowledge and life's experiences to provide 
              individuals with the support and skills to improve their human experience."
            </p>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={onBookClick}
              className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition inline-flex items-center text-lg font-medium shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your First Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}