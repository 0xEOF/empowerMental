// ============================================
// FILE: components/Modalities.tsx
// ============================================
import { Brain, Sparkles, Heart, Users, Lightbulb, Target, Zap, Smile, Focus, Wind } from 'lucide-react'

export default function Modalities() {
  const modalities = [
    { name: "Cognitive Behavioral Therapy (CBT)", icon: <Brain className="w-6 h-6" /> },
    { name: "Dialectical Behavioral Therapy (DBT)", icon: <Heart className="w-6 h-6" /> },
    { name: "Mindfulness-Based Stress Reduction", icon: <Wind className="w-6 h-6" /> },
    { name: "Mindfulness-Cognitive Behavioral Therapy", icon: <Focus className="w-6 h-6" /> },
    { name: "Acceptance and Commitment Therapy (ACT)", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Interpersonal Therapy (IPT)", icon: <Users className="w-6 h-6" /> },
    { name: "Emotional-Focused Therapy (EFT)", icon: <Heart className="w-6 h-6" /> },
    { name: "Person-Centered Therapy", icon: <Smile className="w-6 h-6" /> },
    { name: "Positive Psychology", icon: <Lightbulb className="w-6 h-6" /> },
    { name: "Solution Focused Brief Therapy (SFBT)", icon: <Target className="w-6 h-6" /> },
    { name: "Energy Psychology Techniques", icon: <Zap className="w-6 h-6" /> }
  ]

  return (
    <section id="modalities" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Therapeutic Approaches
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every person is different, so I take an integrative approach using holistic methods 
            and evidence-based models tailored to your unique needs
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalities.map((modality, index) => (
              <div 
                key={index}
                className="flex items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-teal-600 mr-4 flex-shrink-0">
                  {modality.icon}
                </div>
                <p className="text-gray-800 font-medium">
                  {modality.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              My goal is for people to feel supported in a healing space where they can heal, 
              find their inner power, and live their most authentic self.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}