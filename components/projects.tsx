'use client'

import { ArrowUpRight, Github, ExternalLink, Folder } from 'lucide-react'
import Link from 'next/link'
import caseStudies from '@/src/data/case-studies.json'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30 border-t border-border">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-primary">02</span>
            <div className="h-px flex-1 max-w-[60px] bg-border" />
            <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I've built, from open-source tools to production applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((project, index) => (
            <article 
              key={project.id}
              className="group code-card overflow-hidden"
            >
              {/* Project Header - IDE Tab Style */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <Folder size={14} className="text-primary" />
                <span className="font-mono text-sm text-foreground">{project.id}.tsx</span>
                <div className="ml-auto flex items-center gap-2">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.deployUrl && (
                    <a 
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title & Tags */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.challenge}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-muted-foreground/70 mb-2">// tech-stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span 
                        key={tech}
                        className="text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 p-3 bg-muted/50 rounded-md">
                    {project.metrics.slice(0, 4).map((metric, i) => (
                      <div key={i}>
                        <div className="font-mono text-lg font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* View Case Study Link */}
                <Link 
                  href={`/case-studies/${project.id}`}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  View Case Study
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/brylcoderr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors focus-ring"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
