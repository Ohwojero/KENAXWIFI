"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean
  onToggle: () => void
}) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-20 right-8 z-40 p-2 rounded-lg bg-card border border-border hover:border-primary transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div initial={false} animate={{ rotate: isDark ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
      </motion.div>
    </motion.button>
  )
}
