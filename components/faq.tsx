"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How do I subscribe to KENAX WIFI?",
    answer:
      'Subscribing is simple! Click "Get Connected" or "Chat on WhatsApp" to reach our team. They\'ll guide you through the process and get you connected in no time.',
  },
  {
    question: "What speeds can I expect?",
    answer:
      "We offer plans from 10 Mbps up to 100 Mbps depending on your chosen package. All speeds are unlimited data with no throttling.",
  },
  {
    question: "What devices are supported?",
    answer:
      "KENAX WIFI works with all WiFi-enabled devices including smartphones, tablets, laptops, smart TVs, gaming consoles, and IoT devices.",
  },
  {
    question: "Is there technical support available?",
    answer:
      "Yes! We offer 24/7 technical support. Contact us via WhatsApp, phone, or email. Our team will resolve any issues quickly.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "You can change your plan anytime. Simply contact our support team via WhatsApp, and we'll make the switch.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, card payments, and mobile money. Flexible payment plans are available for longer commitments.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted transition"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-card border-t border-border">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
