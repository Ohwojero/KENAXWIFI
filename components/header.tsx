"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header({ isDark }: { isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/images/whatsapp-20image-202025-11-21-20at-208.jpeg"
              alt="KENAX WIFI"
              className="h-8 w-auto mr-2 rounded-full"
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="hover:text-primary transition">
              Pricing
            </a>
            <a href="#features" className="hover:text-primary transition">
              Features
            </a>
            <a href="#faq" className="hover:text-primary transition">
              FAQ
            </a>
            <button
              onClick={() => scrollToSection("pricing")}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#pricing" className="hover:text-primary transition">
              Pricing
            </a>
            <a href="#features" className="hover:text-primary transition">
              Features
            </a>
            <a href="#faq" className="hover:text-primary transition">
              FAQ
            </a>
            <button
              onClick={() => scrollToSection("pricing")}
              className="bg-primary text-white px-6 py-2 rounded-full w-full hover:bg-red-700 transition"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
