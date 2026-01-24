'use client'

import { 
  Search, 
  PenTool, 
  Code2, 
  TestTube, 
  Rocket, 
  MessageSquare,
  GitBranch
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into understanding your business, goals, and target audience. Research competitors and define project scope.',
    icon: Search,
    deliverables: ['Requirements document', 'User personas', 'Project timeline']
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create wireframes and interactive prototypes. Establish design system with consistent visual language.',
    icon: PenTool,
    deliverables: ['Wireframes', 'UI mockups', 'Design system']
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build the application with clean, maintainable code. Regular communication and progress updates.',
    icon: Code2,
    deliverables: ['Source code', 'Version control', 'Documentation']
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Comprehensive testing across devices and browsers. Performance optimization and bug fixes.',
    icon: TestTube,
    deliverables: ['Test reports', 'Performance audit', 'Accessibility check']
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'Launch your application with proper CI/CD setup. Configure monitoring and analytics.',
    icon: Rocket,
    deliverables: ['Live deployment', 'CI/CD pipeline', 'Analytics setup']
  },
  {
    number: '06',
    title: 'Support',
    description: 'Ongoing maintenance and support. Regular updates and feature enhancements as needed.',
    icon: MessageSquare,
    deliverables: ['Maintenance plan', 'Priority support', 'Feature updates']
  }
]

export function Approach() {
  return (
    <section id="approach" className="py-24 border-t border-border">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-primary">03</span>
            <div className="h-px flex-1 max-w-[60px] bg-border" />
            <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How I <span className="text-primary">Think</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A structured process that ensures quality delivery and clear communication at every stage.
          </p>
        </div>

        {/* Process Steps - Git Branch Style */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={step.number}
                  className="relative md:pl-16"
                >
                  {/* Branch Node */}
                  <div className="hidden md:flex absolute left-0 top-0 w-10 h-10 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>

                  <div className="code-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Left: Icon & Number */}
                      <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <span className="font-mono text-2xl font-bold text-primary/30 md:text-primary/20">
                          {step.number}
                        </span>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map(item => (
                            <span 
                              key={item}
                              className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                            >
                              <GitBranch size={10} className="text-primary" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Code snippet decoration */}
        <div className="mt-12 p-4 bg-muted/50 border border-border rounded-lg font-mono text-sm overflow-x-auto">
          <pre className="text-muted-foreground">
            <span className="text-primary">async function</span> <span className="text-amber-400">buildProject</span>() {'{'}
            {'\n'}  <span className="text-primary">const</span> result = <span className="text-primary">await</span> <span className="text-cyan-400">Promise</span>.all([
            {'\n'}    discovery(), design(), develop(), test(), deploy()
            {'\n'}  ]);
            {'\n'}  <span className="text-primary">return</span> <span className="text-green-400">"success"</span>;
            {'\n'}{'}'}
          </pre>
        </div>
      </div>
    </section>
  )
}
