"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor, Check, ChevronDown, ChevronUp } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Ensure the component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Function to determine what text to show in the main button
  const getThemeText = () => {
    if (theme === 'system') return 'Auto'
    if (theme === 'dark') return 'Dark'
    return 'Light'
  }

  // Function to determine what icon to show in the main button
  const getThemeIcon = () => {
    if (theme === 'system') return <Monitor className="w-5 h-5 text-slate-500" />
    if (theme === 'dark') return <Moon className="w-5 h-5 text-slate-500" />
    return <Sun className="w-5 h-5 text-slate-500" />
  }

  return (
    <div className="relative w-full">
      {/* 1. The Main Accordion Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex cursor-pointer items-center justify-between py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <div className="flex items-center gap-3">
          {getThemeIcon()}
          <span className="font-medium">Theme: {getThemeText()}</span>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
      </button>

      {/* 2. The Dropdown Options (Upwork Style) */}
      {isOpen && (
        <div className="flex flex-col gap-1 mt-2 mb-4 pl-2 animate-in slide-in-from-top-2 duration-200">
          
          {/* Auto Option */}
          <button
            onClick={() => { setTheme("system"); setIsOpen(false); }}
            className="flex cursor-pointer items-start gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors text-left"
          >
            <div className="w-5 pt-0.5 flex justify-center shrink-0">
               {theme === "system" ? <Check className="w-5 h-5 text-slate-900 dark:text-white" /> : <Monitor className="w-5 h-5 text-slate-500" />}
            </div>
            <div>
              <p className={`font-medium ${theme === 'system' ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>Auto</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Use the same theme as your device</p>
            </div>
          </button>

          {/* Light Option */}
          <button
            onClick={() => { setTheme("light"); setIsOpen(false); }}
            className="flex cursor-pointer items-start gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors text-left"
          >
            <div className="w-5 pt-0.5 flex justify-center shrink-0">
               {theme === "light" ? <Check className="w-5 h-5 text-slate-900 dark:text-white" /> : <Sun className="w-5 h-5 text-slate-500" />}
            </div>
            <div>
              <p className={`font-medium ${theme === 'light' ? 'text-slate-900 dark:texwhite' : 'text-slate-700 dark:text-slate-300'}`}>Light</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Light background with dark text</p>
            </div>
          </button>

          {/* Dark Option */}
          <button
            onClick={() => { setTheme("dark"); setIsOpen(false); }}
            className="flex cursor-pointer items-start gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors text-left"
          >
            <div className="w-5 pt-0.5 flex justify-center shrink-0">
               {theme === "dark" ? <Check className="w-5 h-5 text-slate-900 dark:text-white" /> : <Moon className="w-5 h-5 text-slate-500" />}
            </div>
            <div>
              <p className={`font-medium ${theme === 'dark' ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>Dark</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Dark background with light text</p>
            </div>
          </button>

        </div>
      )}
    </div>
  )
}