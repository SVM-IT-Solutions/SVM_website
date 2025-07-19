"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Alex Johnson",
    position: "CEO & Founder",
    bio: "Visionary leader with 10+ years in tech industry",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sarah Chen",
    position: "CTO",
    bio: "Full-stack developer and technology strategist",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Michael Rodriguez",
    position: "Lead Designer",
    bio: "Creative designer with passion for user experience",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Emily Davis",
    position: "Marketing Director",
    bio: "Digital marketing expert and growth strategist",
    image: "/placeholder.svg?height=300&width=300",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of experts is dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Github className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
