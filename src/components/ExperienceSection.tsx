import SectionContainer from './SectionContainer'
import ExperienceCard from './ExperienceCard'

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Digital Financial Analyst & Customer Service Specialist",
      company: "Lizardbear Tasking Inc.",
      duration: "May 2025 – Present",
      achievements: [
        "Analyzed cross-departmental datasets to uncover trends, risks, and growth opportunities, informing strategic initiatives.",
        "Developed automated dashboards and reporting tools using Excel, Power BI, and BI platforms, improving data accessibility and decision speed.",
        "Collaborated with cross-functional teams to streamline operations, reduce inefficiencies, and implement scalable, data-driven solutions."
      ]
    },
    {
      title: "Customer Service Representative II",
      company: "Concentrix Daksh Services Philippines",
      duration: "Sep 2023 – Apr 2025",
      achievements: [
        "Delivered empathetic, high-impact support across multichannel platforms, consistently exceeding CSAT and FCR targets.",
        "Led process improvement initiatives, contributing to SOP revisions and operational enhancements.",
        "Mentored new hires, fostering a collaborative and performance-driven team culture."
      ]
    },
    {
      title: "Customer Service Representative I",
      company: "Foundever Philippines Corporation",
      duration: "Jun 2019 – Sep 2023",
      achievements: [
        "Handled customer inquiries with accuracy and empathy, ensuring timely resolution and data integrity.",
        "Maintained CRM records and adhered to compliance standards while meeting KPIs such as CSAT, AHT, and FCR.",
        "Analyzed customer feedback and proposed service enhancements that improved satisfaction and efficiency."
      ]
    }
  ]

  return (
    <SectionContainer>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              duration={exp.duration}
              achievements={exp.achievements}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}