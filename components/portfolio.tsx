  "use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with payment integration and inventory management.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Patient management system with appointment booking and telemedicine features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Restaurant Website",
    category: "Web Design",
    description: "Beautiful restaurant website with online ordering and reservation system.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "Analytics dashboard for SaaS companies with real-time data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "D3.js", "Express.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    category: "Mobile App",
    description: "Comprehensive fitness tracking app with workout plans and progress monitoring.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing platform with advanced search and virtual tours.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg">View All Projects</Button>
        </motion.div>
      </div>
    </section>
  )
}
