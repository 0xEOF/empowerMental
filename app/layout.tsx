import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EmpowerMENTAL Wellness | Licensed Mental Health Counselor & Life Coach',
  description: 'Professional counseling and therapeutic support for individuals, teens, couples and families. Over 25 years of experience providing compassionate, evidence-based mental health services.',
  keywords: 'mental health counseling, life coach, therapy, CBT, DBT, mindfulness, couples therapy, individual therapy, teen therapy, Tampa Florida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}