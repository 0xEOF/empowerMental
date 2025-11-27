'use client'

import { useState } from 'react'
import { Calendar, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  onBookClick: () => void
}

export default function Navigation({ onBookClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center hover:opacity-80 transition flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="EmpowerMENTAL Wellness Logo" 
              width={100} 
              height={100}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="ml-2 sm:ml-3 hidden sm:block">
              <span className="text-lg sm:text-xl font-bold text-gray-900">EmpowerMENTAL</span>
              <span className="text-lg sm:text-xl font-light text-teal-600 ml-1">Wellness</span>
            </div>
            <div className="ml-2 sm:hidden">
              <span className="text-sm font-bold text-gray-900">EmpowerMENTAL</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/#about" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition">
              About
            </Link>
            <Link href="/services" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition">
              Services
            </Link>
            <Link href="/#modalities" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition">
              Approach
            </Link>
            <Link href="/counselor" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition">
              Meet Your Counselor
            </Link>
            <Link href="/#contact" className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition">
              Contact
            </Link>
            <button 
              onClick={onBookClick}
              className="bg-teal-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-teal-700 transition flex items-center text-sm lg:text-base whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 mr-1 lg:mr-2" />
              Book Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <Link 
              href="/#about" 
              className="block text-gray-700 hover:text-teal-600 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block text-gray-700 hover:text-teal-600 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#modalities" 
              className="block text-gray-700 hover:text-teal-600 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Approach
            </Link>
            <Link 
              href="/counselor" 
              className="block text-gray-700 hover:text-teal-600 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Meet Your Counselor
            </Link>
            <Link 
              href="/#contact" 
              className="block text-gray-700 hover:text-teal-600 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button 
              onClick={() => {
                onBookClick()
                setMobileMenuOpen(false)
              }}
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition mt-4 text-sm font-medium"
            >
              Book Session
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}