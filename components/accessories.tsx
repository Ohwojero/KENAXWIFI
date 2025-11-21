"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

const accessories = [
  {
    name: "WiFi Router Pro",
    image: "/high-performance-dual-band-wifi-router-with-antenn.jpg",
    price: "₦15,000",
    description: "High-performance dual-band router",
  },
  {
    name: "MiFi Device",
    image: "/portable-mifi-hotspot-mobile-device-white.jpg",
    price: "₦12,000",
    description: "Portable WiFi hotspot device",
  },
  {
    name: "WiFi Booster",
    image: "/wifi-signal-booster-extender-device.jpg",
    price: "₦8,000",
    description: "Extend your WiFi signal reach",
  },
  {
    name: "Mesh WiFi System",
    image: "/mesh-wifi-system-router-whole-home-coverage.jpg",
    price: "₦25,000",
    description: "Whole-home coverage system",
  },
  {
    name: "Network Cable",
    image: "/cat6-ethernet-network-cable-coiled.jpg",
    price: "₦2,000",
    description: "Cat6 high-speed cable (10m)",
  },
]

export default function Accessories() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-primary">Accessories</span>
          </h2>
          <p className="text-xl text-muted-foreground">Enhance your connectivity experience</p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="rounded-xl"
          >
            {accessories.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:border-primary transition overflow-hidden h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 sm:h-56 bg-muted rounded-lg mb-4 overflow-hidden group">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-primary text-white p-2 rounded-full hover:bg-red-700 transition">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-primary text-white p-2 rounded-full hover:bg-red-700 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
