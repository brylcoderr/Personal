'use client'

import React from 'react'
import { Terminal, Command, GitBranch, Shield, Cpu } from 'lucide-react'
import profile from '@/src/data/profile.json'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="pt-16 pb-12 bg-background border-t border-border/20 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          {/* Brand & CLI Status */}
          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <div className="flex items-center gap-3 font-mono font-bold text-xl tracking-tighter">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)]">
                <Terminal size={18} strokeWidth={2.5} />
              </div>
              <span>BrylCodes</span>
            </div>
            
            <div className="ide-panel bg-secondary/10 p-5 min-w-[320px]">
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.2em] mb-4 border-b border-border/10 pb-2">
                <Command size={12} />
                <span>System_Internal_Status</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 font-mono text-[11px]">
                <div className="text-muted-foreground/40">User:</div>
                <div className="text-foreground text-right italic">shubham-kushwah</div>
                
                <div className="text-muted-foreground/40">Engine:</div>
                <div className="text-foreground text-right uppercase tracking-wider">Node.js_v20</div>
                
                <div className="text-muted-foreground/40">Environment:</div>
                <div className="text-primary/60 text-right">PRODUCTION_STABLE</div>
                
                <div className="text-muted-foreground/40 pt-2 border-t border-border/10">Status:</div>
                <div className="text-green-500/60 text-right pt-2 border-t border-border/10 flex items-center justify-end gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  200_OK
                </div>
              </div>
            </div>
          </div>

          {/* Social Architecture */}
          <div className="space-y-4 w-full lg:max-w-md">
            <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em] pl-2">
              <GitBranch size={12} />
              External_Dependencies[]
            </div>
            
            <div className="ide-panel bg-black/40 p-6 font-mono text-[11px] leading-relaxed relative group border-primary/10">
              <div className="text-primary/40 mb-1">{`{`}</div>
              <div className="pl-6 space-y-1.5">
                {[
                  { key: 'github', label: 'v1.4.2', link: profile.links.github },
                  { key: 'linkedin', label: 'v4.0.0', link: profile.links.linkedin },
                  { key: 'twitter', label: 'v3.1.5', link: profile.links.twitter },
                  { key: 'email', label: 'STABLE', link: `mailto:${profile.email}` }
                ].map((dep, i) => (
                  <div key={dep.key} className="flex">
                    <span className="text-muted-foreground/60">"{dep.key}":</span>
                    <a href={dep.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary/80 hover:text-primary transition-colors">
                      "{dep.label}"{i < 3 ? ',' : ''}
                    </a>
                  </div>
                ))}
              </div>
              <div className="text-primary/40 mt-1">{`}`}</div>
            </div>
          </div>
        </div>

        {/* Legal & Latency Footer */}
        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/30 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Shield size={12} className="text-primary/40" />
              <span>License: MIT_AUTH</span>
            </div>
            <span className="opacity-10">|</span>
            <span className="text-foreground/40">&copy; {currentYear} SHUBHAM_KUSHWAH</span>
          </div>
          
          <div className="flex items-center gap-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/20">
            <span className="flex items-center gap-1.5">
              <Cpu size={12} />
              Latency: 14.02ms
            </span>
            <span>U8-Encoded</span>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute -bottom-10 -right-10 text-[220px] font-mono font-black text-primary/5 select-none pointer-events-none z-0 leading-none">
        {`</code>`}
      </div>
    </footer>
  )
}
