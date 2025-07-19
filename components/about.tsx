"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const achievements = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: CheckCircle, number: "1000+", label: "Projects Completed" },
    { icon: Clock, number: "5+", label: "Years Experience" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About SVM IT SOLUTIONS</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a passionate team of developers, designers, and digital marketing experts dedicated to helping
                businesses succeed online. With over 5 years of experience, we've helped hundreds of companies transform
                their digital presence.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to deliver cutting-edge solutions that not only meet your current needs but also scale
                with your business growth. We believe in building long-term partnerships with our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="group">
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Our Team"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
            >
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
