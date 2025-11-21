"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Chioma Obi",
    role: "Lagos, Nigeria",
    image: "/professional-woman-profile-avatar.jpg",
    text: "KENAX WIFI changed my life! The internet is so fast and reliable. Customer service is amazing!",
    rating: 5,
  },
  {
    name: "Tunde Adeyemi",
    role: "Ibadan, Nigeria",
    image: "/professional-man-profile-avatar.jpg",
    text: "Best internet service I've ever used. The pricing is unbeatable and the speed is consistent.",
    rating: 5,
  },
  {
    name: "Zainab Hassan",
    role: "Abuja, Nigeria",
    image: "/professional-woman-profile-avatar.jpg",
    text: "Finally, an internet provider I can trust. No hidden charges, pure reliability. Highly recommended!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Loved by <span className="text-black dark:text-white">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground">See what our customers are saying</p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary transition"
                initial={{ opacity: 0, x: -50, rotateY: 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(229, 57, 53, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.15 + 0.2 + i * 0.05,
                        duration: 0.3,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.text}"
                </motion.p>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
