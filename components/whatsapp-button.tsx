"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348037099016"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-red-700 transition"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 rounded-full bg-primary/20"
      />
      <MessageCircle className="w-8 h-8 relative z-10" />
    </motion.a>
  )
}
