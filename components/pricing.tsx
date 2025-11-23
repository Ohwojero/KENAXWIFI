"use client"

import { motion } from "framer-motion"
import { Check, MessageCircle } from "lucide-react"

const plans = [
  {
    name: "Starter",
    speed: "2 Mbps",
    price: "₦6,500",
    period: "/month",
    features: ["Unlimited Data", "2 Mbps Speed", "More better for minimum 3", "active Connection"],
  },
  {
    name: "Professional",
    speed: "3 Mbps",
    price: "₦13,500",
    period: "/month",
    features: ["Unlimited Data", "3 Mbps Speed", "More better for minimum 3", "active connections"],
    popular: true,
  },
  {
    name: "Enterprise",
    speed: "10 Mbps",
    price: "₦26,000",
    period: "/month",
    features: ["Unlimited Data", "10 Mbps Speed", "24/7 customer Support", "minimum 20 active connections"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">Choose the perfect plan for your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary"
                  : "bg-card border border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-primary text-lg font-semibold mb-4">{plan.speed}</div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-lg">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/2348037099016"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-red-700"
                    : "bg-card border border-border hover:bg-muted"
                }`}
              >
                <MessageCircle size={18} />
                Buy via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
