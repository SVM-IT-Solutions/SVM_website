"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web Development", "Mobile Apps", "E-commerce", "SEO", "UI/UX Design"]

  const projects = [
     {
    id: 1,
    title: "Blogging Platform",
    category: "Full-Stack Web Development",
    description: "A feature-rich blogging website with user authentication, post creation, editing, and comment functionality.",
    image: "/home/blog.jpg?height=400&width=600&text=Blogging+Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://mern-blog-o6qn.onrender.com/",
    githubUrl: "https://github.com/shubhsingh1515/mern-blog",
    results: ["Multi-user support", "SEO-optimized blogs", "Secure authentication"],
    featured: true,
  },
  {
    id: 2,
    title: "Job Application Portal",
    category: "Web Application",
    description: "A scalable job app allowing users to apply for jobs, upload resumes, and receive notifications.",
    image: "/home/job.avif?height=400&width=600&text=Job+Application+Portal",
    technologies: ["React Native", "Tailwind CSS", "MongoDB", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    results: ["Real-time notifications", "Resume upload", "Mobile responsive"],
    featured: true,
  },
  {
    id: 3,
    title: "Chai Cloud India Website",
    category: "Company Website",
    description: "A responsive website for Chai Cloud India, showcasing services, locations, and contact options.",
    image: "/home/chai.png?height=400&width=600&text=Chai+Cloud+India+Website",
    technologies: ["React", "Tailwind", "JavaScript", "Vite"],
    liveUrl: "https://www.chaicloudindia.com/",
    githubUrl: "#",
    results: ["Improved local visibility", "Fast load times", "Modern responsive design"],
    featured: true,
  },
    
 {
  id: 4,
  title: "Disha Convent School Website",
  category: "Web Development",
  description:
    "A responsive school website featuring admission information, faculty profiles, event updates, and contact details, built with HTML, CSS, JavaScript, and Bootstrap.",
  image: "/portfolio/disha.png?height=400&width=600&text=School+Website",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  liveUrl: "https://www.dishaconventschool.com/",
  githubUrl: "#",
  results: [
    "Enhanced parent-school communication",
    "30% increase in online admissions",
    "Fully mobile responsive design"
  ],
  featured: true,
},

    {
      id: 5,
      title: "FitTracker Mobile App",
      category: "Mobile Apps",
      description:
        "Cross-platform fitness tracking app with real-time analytics and social features for health enthusiasts.",
      image: "/placeholder.svg?height=400&width=600&text=FitTracker+Mobile+App",
      technologies: ["React Native", "Firebase", "Redux", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["50K+ downloads", "4.8 star rating", "85% user retention"],
      featured: false,
    },
    {
      id: 6,
      title: "GreenMarket E-commerce",
      category: "E-commerce",
      description:
        "Sustainable products marketplace with advanced filtering, payment integration, and vendor management.",
      image: "/placeholder.svg?height=400&width=600&text=GreenMarket+E-commerce",
      technologies: ["Next.js", "Shopify", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["$2M+ in sales", "150% conversion increase", "100+ vendors"],
      featured: false,
    },
    {
      id: 7,
      title: "LegalFirm SEO Campaign",
      category: "SEO",
      description: "Complete SEO overhaul for a law firm resulting in first-page rankings for competitive keywords.",
      image: "/placeholder.svg?height=400&width=600&text=LegalFirm+SEO+Campaign",
      technologies: ["SEO", "Content Marketing", "Google Analytics", "SEMrush"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["400% organic traffic increase", "Top 3 rankings", "250% lead generation"],
      featured: false,
    },
    {
      id: 8,
      title: "FinanceApp Dashboard",
      category: "UI/UX Design",
      description: "Modern financial dashboard design with intuitive data visualization and user-friendly interface.",
      image: "/placeholder.svg?height=400&width=600&text=FinanceApp+Dashboard",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["40% better user engagement", "25% task completion increase", "95% user satisfaction"],
      featured: false,
    },
    {
      id: 9,
      title: "RestaurantPOS System",
      category: "Web Development",
      description: "Complete point-of-sale system for restaurants with inventory management and analytics.",
      image: "/placeholder.svg?height=400&width=600&text=RestaurantPOS+System",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["60% faster order processing", "30% cost reduction", "200+ restaurants"],
      featured: false,
    },
    {
      id: 10,
      title: "TravelBuddy Mobile App",
      category: "Mobile Apps",
      description: "Travel planning and booking app with AI recommendations and social sharing features.",
      image: "/placeholder.svg?height=400&width=600&text=TravelBuddy+Mobile+App",
      technologies: ["Flutter", "Firebase", "Google Maps API", "AI/ML"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["100K+ downloads", "4.7 star rating", "70% booking conversion"],
      featured: false,
    },
    {
      id: 11,
      title: "FashionBrand E-store",
      category: "E-commerce",
      description: "Luxury fashion e-commerce platform with AR try-on features and personalized recommendations.",
      image: "/placeholder.svg?height=400&width=600&text=FashionBrand+E-store",
      technologies: ["Shopify Plus", "AR.js", "React", "Klaviyo"],
      liveUrl: "#",
      githubUrl: "#",
      results: ["300% sales increase", "45% cart abandonment reduction", "Premium brand positioning"],
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Showcasing Our Best Work</h1>
            <p className="text-xl mb-8 opacity-90">
              Explore our portfolio of successful projects that have helped businesses achieve their digital
              transformation goals and drive measurable results.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Start Your Project</Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Featured Work</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Most Impactful Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These standout projects demonstrate our ability to deliver exceptional results and drive business growth.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-white">Featured</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-blue-600 text-white mb-2">{project.category}</Badge>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-600 mb-6">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                          </a>
                      
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800">Complete Portfolio</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our complete portfolio of successful projects across different industries and technologies.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`${
                  activeFilter === filter ? "bg-blue-600 hover:bg-blue-700 text-white" : "hover:bg-blue-50"
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            View
                          </Button>
                          </a>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your project and create a solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <Link href="/contact">Start Your Project</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
