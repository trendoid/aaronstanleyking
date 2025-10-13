'use client'

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  readonly children: React.ReactNode
  readonly defaultTheme?: Theme
  readonly storageKey?: string
  readonly enableSystem?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'theme',
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (typeof window !== 'undefined' && localStorage.getItem(storageKey)) as Theme || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    root.classList.add(theme)
  }, [theme, enableSystem])

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }),
    [theme, storageKey]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}