"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience speeds up to 100 Mbps for seamless streaming, gaming, and browsing",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Enterprise-grade security and 99.9% uptime guarantee for your peace of mind",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our expert support team is always ready to help you stay connected",
  },
  {
    icon: Users,
    title: "Affordable Plans",
    description: "Flexible payment options with plans for every budget and need",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">KENAX WIFI</span>
          </h2>
          <p className="text-xl text-muted-foreground">Unmatched speed, reliability, and service</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary transition"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
