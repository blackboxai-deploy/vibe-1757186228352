import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionContainer({ children, className = '', id }: SectionContainerProps) {
  return (
    <Card id={id} className={`p-6 sm:p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm ${className}`}>
      {children}
    </Card>
  )
}