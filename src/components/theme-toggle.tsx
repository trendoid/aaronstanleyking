'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const cycleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else if (theme === 'dark') {
            setTheme('light')
        }
    }

    const getIcon = () => {
        if (theme === 'dark') {
            return <Moon className="h-4 w-4" />
        } else {
            return <Sun className="h-4 w-4" />
        }
    }

    const getTitle = () => {
        if (theme === 'dark') {
            return "Switch to light theme"
        } else {
            return "Switch to dark theme"
        }
    }

    return (
        <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={cycleTheme}
            title={getTitle()}
            className="w-9 h-9 p-0"
        >
            {getIcon()}
            <span className="sr-only">{getTitle()}</span>
        </Button>
    )
}