'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface UIContextType {
  isCodeView: boolean
  toggleCodeView: () => void
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isCodeView, setIsCodeView] = useState(false)

  const toggleCodeView = () => setIsCodeView(prev => !prev)

  return (
    <UIContext.Provider value={{ isCodeView, toggleCodeView }}>
      <div className={isCodeView ? 'code-view-active' : ''}>
        {children}
      </div>
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}
