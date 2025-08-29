"use client"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button
        aria-hidden
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full border border-border bg-background"
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-full cursor-pointer border border-border bg-background text-foreground hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Sun className={`h-5 w-5 transition-all duration-200 ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-200 ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`}
      />
      <span className="sr-only">{isDark ? "Light mode" : "Dark mode"}</span>
    </Button>
  )
}
