import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="EmpowerMENTAL Wellness Logo" 
                width={100} 
                height={100}
                className="w-8 h-8"
              />
              <div className="ml-2">
                <span className="font-bold">EmpowerMENTAL</span>
                <span className="font-light text-teal-400 ml-1">Wellness</span>
              </div>
            </div>
            <p className="text-gray-400">
              Licensed Mental Health Counseling & Life Coaching Services
            </p>
            <div className="mt-4 flex items-center text-gray-400">
              <Heart className="w-4 h-4 mr-2 text-pink-400" />
              <span className="text-sm">Empowering You to Live Your Best Life</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-teal-400 transition">Individual Therapy</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition">Therapy for Women</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition">Children & Teen Therapy</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition">Couples Therapy</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition">Life Coaching</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#about" className="hover:text-teal-400 transition">About Us</Link></li>
              <li><Link href="/#modalities" className="hover:text-teal-400 transition">Our Approach</Link></li>
              <li><Link href="/counselor" className="hover:text-teal-400 transition">Meet Your Counselor</Link></li>
              <li><Link href="/#contact" className="hover:text-teal-400 transition">Contact</Link></li>
              <li><a href="#" className="hover:text-teal-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span> 100 South Ashley Drive, Suite 600, Tampa, FL 33602
 </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>(813) 924-3681</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>www.empowermentalwellness.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">&copy; 2025 EmpowerMENTAL Wellness LLC. All rights reserved.</p>
            <p className="text-sm">Licensed Mental Health Counselor | Professional Life Coach</p>
          </div>
        </div>
      </div>
    </footer>
  )
}