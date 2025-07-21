"use client"

import { motion } from "framer-motion"
import { Users, Award, CheckCircle, Clock } from "lucide-react"

const stats = [
  { icon: Users, number: "100+", label: "Happy Clients", description: "Satisfied customers worldwide" },
  { icon: Award, number: "10+", label: "Awards Won", description: "Industry recognition" },
  { icon: CheckCircle, number: "100+", label: "Projects Completed", description: "Successful deliveries" },
  { icon: Clock, number: "5+", label: "Years Experience", description: "In the industry" },
]

export default function Stats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
