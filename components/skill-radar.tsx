'use client'

import { useState } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const skillData = [
  { skill: 'React / Next.js', level: 95, fullMark: 100 },
  { skill: 'TypeScript', level: 92, fullMark: 100 },
  { skill: 'Node.js / Express', level: 88, fullMark: 100 },
  { skill: 'HTML5 / CSS3', level: 90, fullMark: 100 },
  { skill: 'PostgreSQL / MySQL', level: 85, fullMark: 100 },
  { skill: 'MongoDB', level: 82, fullMark: 100 },
  { skill: 'DevOps & Cloud', level: 84, fullMark: 100 },
  { skill: 'Docker / CI', level: 78, fullMark: 100 },
]

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
]

const skillsByCategory: Record<string, typeof skillData> = {
  all: skillData,
  frontend: [
    { skill: 'React', level: 95, fullMark: 100 },
    { skill: 'Next.js', level: 92, fullMark: 100 },
    { skill: 'TypeScript', level: 92, fullMark: 100 },
    { skill: 'HTML5 / CSS3', level: 90, fullMark: 100 },
    { skill: 'Accessibility', level: 85, fullMark: 100 },
  ],
  backend: [
    { skill: 'Node.js / Express', level: 88, fullMark: 100 },
    { skill: 'Python', level: 80, fullMark: 100 },
    { skill: 'PostgreSQL / MySQL', level: 85, fullMark: 100 },
    { skill: 'MongoDB', level: 82, fullMark: 100 },
    { skill: 'REST APIs', level: 90, fullMark: 100 },
    { skill: 'GraphQL', level: 75, fullMark: 100 },
  ],
  devops: [
    { skill: 'Docker', level: 78, fullMark: 100 },
    { skill: 'AWS / Vercel', level: 84, fullMark: 100 },
    { skill: 'CI/CD', level: 78, fullMark: 100 },
    { skill: 'Git', level: 95, fullMark: 100 },
    { skill: 'Linux', level: 75, fullMark: 100 },
    { skill: 'Kubernetes', level: 70, fullMark: 100 },
  ],
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number; payload: { skill: string } }>
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 shadow-xl">
          <p className="text-sm font-semibold text-foreground">{payload[0].payload.skill}</p>
          <p className="text-xs text-foreground/70 font-mono">{payload[0].value}% proficiency</p>
        </div>
    )
  }
  return null
}

export function SkillRadar() {
  const currentData = skillsByCategory['all']

  return (
    <div className="w-full h-full flex items-center justify-center relative py-4">
      {/* Futuristic Scanner Hub */}
      <div className="relative group w-full max-w-[400px] aspect-square">
        {/* Background Target Grids */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
           <div className="w-full aspect-square rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
           <div className="absolute w-[80%] aspect-square rounded-full border border-primary/5 animate-[spin_15s_linear_infinite_reverse]" />
           <div className="absolute w-[60%] aspect-square rounded-full border border-primary/5 animate-[spin_10s_linear_infinite]" />
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-full h-full relative z-10"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={currentData}>
              <PolarGrid
                stroke="rgba(139, 92, 246, 0.1)"
                strokeWidth={1}
              />
              <PolarAngleAxis
                dataKey="skill"
                tick={{
                  fill: 'rgba(255,255,255,0.4)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              />
              <Radar
                name="Proficiency"
                dataKey="level"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.15}
                strokeWidth={3}
                dot={{
                  r: 3,
                  fill: '#000',
                  stroke: 'hsl(var(--primary))',
                  strokeWidth: 2,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}
