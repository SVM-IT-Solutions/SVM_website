"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Shield, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "We focus on delivering measurable results that drive your business growth and success.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team consists of certified professionals with years of experience in their respective fields.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We understand the importance of time and deliver projects within agreed timelines.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality checks ensure that every project meets the highest standards.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your business operations run smoothly.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized by industry leaders for our innovative solutions and exceptional service.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SVM IT SOLUTIONS ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with creative innovation to deliver solutions that exceed expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <reason.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
