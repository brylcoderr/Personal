import { notFound } from 'next/navigation'
import { CaseStudyContent } from './case-study-content'
import caseStudies from '@/src/data/case-studies.json'

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params
  const study = caseStudies.find((cs) => cs.id === id)

  if (!study) {
    notFound()
  }

  return <CaseStudyContent study={study} />
}
