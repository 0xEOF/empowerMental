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
            <p className="text-gray-600">100 South Ashley Drive, Suite 600, Tampa, FL 33602</p>
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
            <p className="text-gray-600">bcuba@empowermentalwellness.net</p>
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
  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
    Insurance & Payment
  </h3>
  
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">Accepted Insurance Plans</h4>
      <p className="text-gray-700">
        I accept most major insurance plans, including Aetna, Cigna, and United Healthcare, as well as Medicare. Prior to your first appointment, I recommend verifying your coverage for mental health services with your insurance provider.
      </p>
      <br></br>
      <p className="text-gray-700">
        We also offer custom life-coaching packages.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">Insurance Questions?</h4>
      <p className="text-gray-700">
        If you have questions about whether your insurance will cover our sessions or if you need assistance navigating the insurance process, please don't hesitate to contact me.
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}