"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone } from "lucide-react"

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className="bg-secondary/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="80" r="3" fill="#E53935" />
                <path d="M 60 80 Q 70 70 80 80" stroke="#E53935" strokeWidth="2" fill="none" />
                <path d="M 60 80 Q 75 60 90 80" stroke="#E53935" strokeWidth="2" fill="none" />
                <path d="M 60 80 Q 80 50 100 80" stroke="#E53935" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-lg font-bold">
                KENAX<span className="text-primary">WIFI</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">Unlimited internet for everyone</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Pricing", "Features", "Accessories", "FAQ", "Support"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Blog", "Careers", "Privacy Policy", "Terms"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/2348037099016" className="text-muted-foreground hover:text-primary transition">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:support@kenaxwifi.com" className="text-muted-foreground hover:text-primary transition">
                  Email
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+234 803 709 9016</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 KENAX WIFI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Facebook", "Twitter", "Instagram"].map((social) => (
              <a key={social} href="#" className="hover:text-primary transition">
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
