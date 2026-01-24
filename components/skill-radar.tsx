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
  const [activeCategory, setActiveCategory] = useState('all')
  const currentData = skillsByCategory[activeCategory]

  return (
    <div className="w-full space-y-12">
      {/* High-Tech Command Center Console */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-3xl">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              'relative px-5 py-2.5 rounded-[0.9rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group',
              activeCategory === category.id
                ? 'text-black z-10'
                : 'text-white/40 hover:text-white/70'
            )}
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-20">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Futuristic Scanner Hub */}
      <div className="relative group">
        {/* Background Target Grids */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
           <div className="w-full aspect-square rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
           <div className="absolute w-[80%] aspect-square rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
           <div className="absolute w-[60%] aspect-square rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[350px] sm:h-[450px] relative z-10"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={currentData}>
              <PolarGrid
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth={1}
              />
              <PolarAngleAxis
                dataKey="skill"
                tick={{
                  fill: 'rgba(255,255,255,0.5)',
                  fontSize: 10,
                  fontWeight: 900,
                  letterSpacing: '0.15em',
                }}
              />
              <Radar
                name="Proficiency Level"
                dataKey="level"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.15}
                strokeWidth={4}
                dot={{
                  r: 4,
                  fill: '#000',
                  stroke: 'hsl(var(--primary))',
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: 'hsl(var(--primary))',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* System Node Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentData.map((item, idx) => (
          <motion.div
            key={item.skill}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 group/node hover:bg-primary/5 hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] group-hover/node:text-primary transition-colors">
                Node_0{idx + 1}
              </span>
              <span className="text-[10px] font-mono text-white/60 font-bold group-hover/node:text-white transition-colors">
                {item.level}%
              </span>
            </div>
            <p className="text-xs font-bold text-white group-hover/node:translate-x-1 transition-transform">
              {item.skill}
            </p>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${item.level}%` }}
                 transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                 className="h-full bg-primary shadow-[0_0_10px_rgba(147,51,234,0.5)]"
               />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
