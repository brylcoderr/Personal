'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function DataPacketAnimation({ isTransmitting }: { isTransmitting: boolean }) {
  const nodes = [
    { x: '10%', y: '50%', label: 'ORIGIN' },
    { x: '35%', y: '20%', label: 'RELAY_A' },
    { x: '35%', y: '80%', label: 'RELAY_B' },
    { x: '65%', y: '50%', label: 'GATEWAY' },
    { x: '90%', y: '50%', label: 'DEST' },
  ]

  return (
    <AnimatePresence>
      {isTransmitting && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full max-w-2xl aspect-video px-12">
            <div className="absolute top-12 left-12 font-mono text-[10px] text-primary/40 uppercase tracking-[0.4em]">
              Data_Transmission_Protocol: ACTIVE
            </div>

            {/* Static Nodes */}
            {nodes.map((node, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-secondary border border-border rounded-full flex flex-col items-center"
                style={{ left: node.x, top: node.y }}
              >
                <div className="mt-4 font-mono text-[8px] text-muted-foreground/30 whitespace-nowrap">
                   {node.label}
                </div>
              </div>
            ))}

            {/* Connecting Lines (Background) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
               <line x1="10%" y1="50%" x2="35%" y2="20%" stroke="currentColor" strokeWidth="1" />
               <line x1="10%" y1="50%" x2="35%" y2="80%" stroke="currentColor" strokeWidth="1" />
               <line x1="35%" y1="20%" x2="65%" y2="50%" stroke="currentColor" strokeWidth="1" />
               <line x1="35%" y1="80%" x2="65%" y2="50%" stroke="currentColor" strokeWidth="1" />
               <line x1="65%" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Pulsing "Packets" */}
            <motion.div
              initial={{ left: '10%', top: '50%' }}
              animate={{ 
                left: ['10%', '35%', '65%', '90%'],
                top: ['50%', '20%', '50%', '50%'],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-12 h-6 bg-primary/20 border border-primary/40 rounded flex items-center justify-center font-mono text-[8px] text-primary blur-[1px]"
            >
               0x8F2
            </motion.div>

            <motion.div
              initial={{ left: '10%', top: '50%' }}
              animate={{ 
                left: ['10%', '35%', '65%', '90%'],
                top: ['50%', '80%', '50%', '50%'],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: 0.8,
                ease: "linear"
              }}
              className="absolute w-12 h-6 bg-primary/20 border border-primary/40 rounded flex items-center justify-center font-mono text-[8px] text-primary blur-[1px]"
            >
               0xA1E
            </motion.div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center space-y-4">
               <div className="font-mono text-[9px] text-primary uppercase animate-pulse">
                  Encrypting_Payload... Transmitting_Buffer...
               </div>
               <div className="w-48 h-1 bg-secondary mx-auto rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: [-200, 200] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-full bg-primary"
                  />
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
