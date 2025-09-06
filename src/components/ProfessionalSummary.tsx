import SectionContainer from './SectionContainer'

export default function ProfessionalSummary() {
  return (
    <SectionContainer>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">
          Professional Summary
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Customer-centric Digital Financial Analyst with <span className="font-semibold text-blue-600">6+ years of experience</span> in financial data analysis, business intelligence, and customer service across global markets. Proven ability to transform complex datasets into actionable insights, optimize digital systems, and elevate client satisfaction through empathetic communication and process innovation.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Holds a <span className="font-semibold text-blue-600">Bachelor of Science in Information Systems</span>, with recognized excellence in leadership and technical performance. Adept at bridging analytical precision with human connection to drive operational success in multicultural environments.
        </p>
      </div>
    </SectionContainer>
  )
}