"use client"

import { motion } from "framer-motion"
import { Wifi } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black py-20 md:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #E53935, transparent)" }}
          animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #E53935, transparent)" }}
          animate={{ y: [0, -30, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Wifi size={16} />
            <span className="text-sm font-semibold">Unlimited Internet. Zero Limits.</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Stay Connected
            <br />
            <span className="text-black dark:text-white">Always & Everywhere</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience blazing-fast, reliable internet at unbeatable prices. KENAX WIFI brings you unlimited
            connectivity for your home and business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => scrollToSection("pricing")}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition transform hover:scale-105 text-sm sm:text-base"
            >
              Get Started
            </button>
            <a
              href="https://wa.me/2348037099016"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition text-sm sm:text-base"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { number: "500K+", label: "Happy Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-2 sm:p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-xs sm:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
