import SectionContainer from './SectionContainer'
import SkillBadge from './SkillBadge'

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Financial & Business Intelligence",
      skills: [
        "Financial Data Analysis & Reporting",
        "Business Intelligence Tools (Excel, Power BI)",
        "KPI Tracking & Performance Metrics",
        "Process Improvement & Automation"
      ]
    },
    {
      category: "Technical Skills",
      skills: [
        "Digital Systems Optimization",
        "CRM Platforms & Multichannel Support",
        "Campaign Design & Narrative Crafting"
      ]
    },
    {
      category: "Interpersonal & Leadership",
      skills: [
        "Empathetic Communication & Conflict Resolution",
        "Cross-functional Collaboration",
        "Multicultural Team Engagement"
      ]
    }
  ]

  return (
    <SectionContainer>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
          Core Skills
        </h2>
        
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skillIndex}
                    skill={skill}
                    variant={categoryIndex === 0 ? 'default' : categoryIndex === 1 ? 'secondary' : 'outline'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}