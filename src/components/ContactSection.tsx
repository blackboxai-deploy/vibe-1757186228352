'use client'

import { Button } from '@/components/ui/button'
import SectionContainer from './SectionContainer'

export default function ContactSection() {
  return (
    <SectionContainer id="contact">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">
          Let's Connect
        </h2>
        
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ready to bring analytical expertise and customer-centric solutions to your team. 
          Let's discuss how my experience in financial data analysis and business intelligence 
          can drive your organization's success.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => window.location.href = 'mailto:eulaliovibayjr@gmail.com?subject=Professional Opportunity'}
          >
            Send Email
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => window.open('https://linkedin.com/in/eulaliovibayjr', '_blank')}
          >
            View LinkedIn
          </Button>
          
          <Button 
            variant="secondary"
            size="lg"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => window.location.href = 'tel:+639641792805'}
          >
            Call Now
          </Button>
        </div>
        
        <div className="pt-6 border-t border-gray-200 mt-8">
          <p className="text-sm text-gray-500">
            Available for full-time opportunities • Open to remote and hybrid work arrangements
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}