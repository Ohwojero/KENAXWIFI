"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Pricing from "@/components/pricing"
import Accessories from "@/components/accessories"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for stored preference or system preference
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkTheme = stored ? stored === "dark" : prefersDark
    setIsDark(isDarkTheme)
    applyTheme(isDarkTheme)
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <Hero />
      <Pricing />
      <Accessories />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer isDark={isDark} />
      <WhatsAppButton />
    </div>
  )
}
