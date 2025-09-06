'use client'

import { Button } from '@/components/ui/button'
import SectionContainer from './SectionContainer'

export default function HeroSection() {
  return (
    <SectionContainer className="text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            EULALIO V. IBAY JR.
          </h1>
          <p className="text-xl sm:text-2xl text-blue-600 font-medium">
            Digital Financial Analyst & Customer Service Specialist
          </p>
          <p className="text-lg text-gray-600">
            Antipolo City, Rizal, Philippines
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-700">
          <a 
            href="mailto:eulaliovibayjr@gmail.com" 
            className="hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            eulaliovibayjr@gmail.com
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a 
            href="tel:+639641792805" 
            className="hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            +63 964-179-2805
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a 
            href="https://linkedin.com/in/eulaliovibayjr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            linkedin.com/in/eulaliovibayjr
          </a>
        </div>

        <div className="pt-4">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}