"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Get In <span className="text-black dark:text-black">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">We're here to help. Reach out anytime!</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp",
              value: "+2348037099016",
              link: "https://wa.me/2348037099016",
            },
            {
              icon: Mail,
              title: "Email",
              value: "support@kenaxwifi.com",
              link: "mailto:support@kenaxwifi.com",
            },
            {
              icon: MapPin,
              title: "Coverage Areas",
              value: "Lagos • Ibadan • Abuja",
              link: "#",
            },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary transition text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-primary hover:underline">{contact.value}</p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 text-center border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to get connected?</h3>
          <p className="text-muted-foreground mb-6">Don't wait! Subscribe today and enjoy unlimited internet</p>
          <a
            href="https://wa.me/2348037099016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Start Your Subscription
          </a>
        </motion.div>
      </div>
    </section>
  )
}
