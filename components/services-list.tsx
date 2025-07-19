"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Search, Palette, Database, Globe } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies.",
    features: ["React & Next.js", "Node.js Backend", "Responsive Design", "Performance Optimization"],
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting from $2,999",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native Development", "App Store Optimization"],
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting from $4,999",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Comprehensive SEO strategies to boost your online visibility.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Content Marketing"],
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting from $999/month",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert visitors into customers.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting from $1,999",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions and API development.",
    features: ["API Development", "Database Design", "Cloud Integration", "Microservices"],
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting from $3,499",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration.",
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"],
    image: "/placeholder.svg?height=300&width=400",
    price: "Starting from $4,499",
  },
]

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
