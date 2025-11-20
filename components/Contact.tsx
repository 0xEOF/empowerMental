import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Reach out today to start your journey toward empowerment and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Tampa, Florida</p>
            <p className="text-sm text-gray-500 mt-1">In-person & Online Sessions</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">(813) 924-3681</p>
            <p className="text-sm text-gray-500 mt-1">Call or Text</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@empowermental.com</p>
            <p className="text-sm text-gray-500 mt-1">24-hour response</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
            <p className="text-gray-600">Mon-Fri: 9am-7pm</p>
            <p className="text-sm text-gray-500 mt-1">Flexible scheduling available</p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Insurance & Payment
          </h3>
          <p className="text-gray-700 text-center mb-6">
            We accept most major insurance plans and offer flexible payment options. 
            Contact us to verify your coverage and discuss payment arrangements.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Insurance Accepted</p>
              <p className="text-sm text-gray-600 mt-1">Most major plans</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Sliding Scale</p>
              <p className="text-sm text-gray-600 mt-1">Limited availability</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Self-Pay Options</p>
              <p className="text-sm text-gray-600 mt-1">Flexible plans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}