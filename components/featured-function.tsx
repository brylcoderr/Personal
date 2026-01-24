'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileCode, Copy, Check, Terminal } from 'lucide-react'

const featuredCode = `
/**
 * @name useOptimizedArchitecture
 * @description Injects high-performance patterns into digital solutions.
 */
export function useArchitect() {
  const [status, setStatus] = useState('IDLE');
  
  const executeProcess = async (requirements) => {
    setStatus('ANALYZING');
    
    // Core engine logic
    const blueprint = await analyze(requirements);
    
    setStatus('CONSTRUCTING');
    const result = await construct(blueprint);
    
    return {
      success: true,
      data: result,
      latency: "14ms"
    };
  };

  return { executeProcess, status };
}
`.trim();

export function FeaturedFunction() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(featuredCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="ide-panel bg-[#0d0d0f] border-primary/20 shadow-2xl relative group overflow-hidden">
      {/* Window Header */}
      <div className="px-5 py-4 bg-secondary/30 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center gap-2 text-primary/60 font-mono text-[10px] uppercase tracking-widest pl-4 border-l border-border/20">
            <FileCode size={14} />
            <span>architect.hooks.ts</span>
            <span className="text-muted-foreground/20 italic font-normal px-2">modified</span>
          </div>
        </div>
        
        <button 
          onClick={copyToClipboard}
          className="p-2 text-muted-foreground/40 hover:text-primary transition-colors rounded hover:bg-primary/5"
          title="Copy to clipboard"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-6 font-mono text-[13px] leading-relaxed relative overflow-hidden">
        {/* Line Numbers Simulation */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-black/20 border-r border-border/10 flex flex-col items-center pt-6 text-muted-foreground/20 select-none">
          {Array.from({ length: 22 }).map((_, i) => (
            <div key={i} className="h-[1.75em] flex items-center justify-end pr-3 w-full text-[10px]">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Syntax Highlighted Code */}
        <pre className="pl-10 overflow-x-auto no-scrollbar scroll-smooth">
          <code className="text-foreground/90">
            <span className="text-primary/60 italic font-light whitespace-pre">{"/**\n * @name useOptimizedArchitecture\n * @description Injects high-performance patterns into digital solutions.\n */\n"}</span>
            <span className="text-purple-400">export</span> <span className="text-purple-400">function</span> <span className="text-yellow-200">useArchitect</span>() {"{\n"}
            {"  "}const [<span className="text-blue-300">status</span>, <span className="text-yellow-200">setStatus</span>] = <span className="text-yellow-200">useState</span>(<span className="text-orange-300">'IDLE'</span>);{"\n\n"}
            {"  "}const <span className="text-blue-300">executeProcess</span> = <span className="text-purple-400">async</span> (<span className="text-blue-300">requirements</span>) ={">"} {"{\n"}
            {"    "}<span className="text-yellow-200">setStatus</span>(<span className="text-orange-300">'ANALYZING'</span>);{"\n\n"}
            {"    "}<span className="text-primary/40">// Core engine logic</span>{"\n"}
            {"    "}const <span className="text-blue-300">blueprint</span> = <span className="text-purple-400">await</span> <span className="text-yellow-200">analyze</span>(<span className="text-blue-300">requirements</span>);{"\n\n"}
            {"    "}<span className="text-yellow-200">setStatus</span>(<span className="text-orange-300">'CONSTRUCTING'</span>);{"\n"}
            {"    "}const <span className="text-blue-300">result</span> = <span className="text-purple-400">await</span> <span className="text-yellow-200">construct</span>(<span className="text-blue-300">blueprint</span>);{"\n\n"}
            {"    "}<span className="text-purple-400">return</span> {"{\n"}
            {"      "}success: <span className="text-purple-400">true</span>,{"\n"}
            {"      "}data: <span className="text-blue-300">result</span>,{"\n"}
            {"      "}latency: <span className="text-orange-300">"14ms"</span>{"\n"}
            {"    "};{"\n"}
            {"  "};{"\n\n"}
            {"  "}<span className="text-purple-400">return</span> {"{ "}executeProcess, status{" };\n"}
            {"}"}
          </code>
        </pre>
      </div>

      {/* Editor Decoration */}
      <div className="absolute top-0 right-10 bottom-0 w-[1px] bg-border/5" />
      <div className="absolute top-1/2 right-4 -translate-y-1/2 font-mono text-[80px] text-primary/5 select-none pointer-events-none">
        <Terminal size={120} />
      </div>

      <div className="px-5 py-2 bg-secondary/10 border-t border-border/10 flex items-center justify-between text-[9px] font-mono text-muted-foreground/30 uppercase tracking-widest">
         <div className="flex gap-4">
            <span>Spaces: 2</span>
            <span>UTF-8</span>
         </div>
         <div className="text-primary/30">Ln 22, Col 1</div>
      </div>
    </div>
  )
}
