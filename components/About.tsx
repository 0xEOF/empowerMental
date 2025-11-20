import { CheckCircle, Globe, Heart, Users } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "15+ Years Experience",
      description: "Dedicated service in schools, hospitals, community centers, and private practice"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Culturally Inclusive",
      description: "Multi-cultural experience with diverse backgrounds."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Approach",
      description: "Evidence-based therapy combined with compassionate, personalized care"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About EmpowerMENTAL Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional counseling and therapeutic support for individuals, teens, couples and families
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl hover:shadow-lg transition text-center"
            >
              <div className="text-teal-600 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/Man-therapy.jpg" 
              alt="Compassionate therapy session"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              At EmpowerMENTAL Wellness, we focus on understanding your unique challenges and 
              empower you to thrive while providing compassionate, holistic, and evidence-based 
              approaches to best meet your individual needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My passion is to help others live their best life. All have the ability to heal 
              and grow with support. I love to empower individuals to cultivate self-awareness, 
              transform cognitive distortions, and address trauma keeping one in limiting mental patterns.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Licensed Mental Health Counselor and Life Coach</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Graduate specialization in Counseling and Psychology</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Nonjudgmental, compassionate therapeutic space</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Culturally inclusive and open perspective</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}