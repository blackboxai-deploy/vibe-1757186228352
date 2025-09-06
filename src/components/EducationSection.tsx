import SectionContainer from './SectionContainer'
import { Badge } from '@/components/ui/badge'

export default function EducationSection() {
  const awards = [
    "Technical Excellence Award",
    "Leadership Award", 
    "Dean's Lister"
  ]

  return (
    <SectionContainer>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
          Education
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Bachelor of Science in Information Systems
            </h3>
            <p className="text-lg text-green-600 font-medium mb-1">
              Don Mariano Marcos Memorial State University – North La Union Campus
            </p>
            <p className="text-gray-600 mb-1">
              Sapilang, Bacnotan, La Union, Philippines
            </p>
            <p className="text-sm text-gray-500 font-medium mb-3">
              2019
            </p>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Honors & Awards:
              </p>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-300 px-3 py-1 font-medium"
                  >
                    {award}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}