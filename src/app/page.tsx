import HeroSection from '@/components/HeroSection'
import ProfessionalSummary from '@/components/ProfessionalSummary'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import SkillsSection from '@/components/SkillsSection'
import LanguagesSection from '@/components/LanguagesSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
        <HeroSection />
        <ProfessionalSummary />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <LanguagesSection />
        <ContactSection />
      </div>
    </main>
  )
}