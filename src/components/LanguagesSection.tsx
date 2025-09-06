import SectionContainer from './SectionContainer'
import { Badge } from '@/components/ui/badge'

export default function LanguagesSection() {
  const languages = [
    { language: "English", proficiency: "Fluent", color: "bg-blue-100 text-blue-800 border-blue-300" },
    { language: "Tagalog", proficiency: "Native", color: "bg-green-100 text-green-800 border-green-300" }
  ]

  return (
    <SectionContainer>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
          Languages
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((lang, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-gray-50">
              <span className="text-lg font-medium text-gray-900">
                {lang.language}
              </span>
              <Badge 
                variant="outline"
                className={`${lang.color} px-3 py-1 font-semibold`}
              >
                {lang.proficiency}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}