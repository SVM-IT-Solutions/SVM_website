"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Search,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Star,
  Play,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

 const heroSlides = [
  {
    title: "Custom Software Development",
    subtitle: "Tailored Solutions That Fit Your Business",
    description:
      "We build secure, scalable, and high-performance software customized to solve your unique business challenges.",
    image: "/home/software.jpg?height=600&width=800&text=Custom+Software+Development",
  },
  {
    title: "Mobile App Development",
    subtitle: "Seamless Experiences on Android & iOS",
    description:
      "From design to deployment, we develop intuitive and feature-rich mobile applications for all platforms.",
    image: "/home/mobile.jpeg?height=600&width=800&text=Mobile+App+Development",
  },
  {
    title: "Website Development",
    subtitle: "Modern, Responsive & Conversion-Focused",
    description:
      "We craft engaging websites that look great on all devices and turn visitors into customers.",
    image: "/home/website.jpeg?height=600&width=800&text=Website+Development",
  },
  {
    title: "SEO Optimization Services",
    subtitle: "Boost Visibility. Increase Traffic. Grow Revenue.",
    description:
      "Our data-driven SEO strategies help you dominate search rankings and achieve long-term online growth.",
    image: "/home/seo.jpg?height=600&width=800&text=SEO+Optimization",
  },
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Secure & Scalable"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store Optimization"],
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic growth.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Complete digital marketing solutions including social media, PPC, and content marketing.",
      features: ["Social Media Marketing", "Google Ads", "Content Marketing", "Analytics & Reporting"],
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Award className="h-6 w-6" /> },
    { number: "30+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "96%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "Their web development team delivered an exceptional e-commerce platform that increased our sales by 150%. The SEO optimization brought us to the first page of Google.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      role: "Marketing Director",
      content:
        "Outstanding mobile app development and digital marketing services. Our app has over 50K downloads and our organic traffic grew by 300%.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=MC",
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLab",
      role: "Founder",
      content:
        "Professional, reliable, and results-driven. They transformed our outdated website into a modern, high-converting platform.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=ER",
    },
  ]

const portfolio = [ 
  {
    title: "Blogging Platform",
    category: "Full-Stack Web Development",
    description: "A feature-rich blogging website with user authentication, post creation, editing, and comment functionality.",
    image: "/home/blog.jpg?height=300&width=400&text=Blogging+Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Job Application Portal",
    category: "Web Application",
    description: "A scalable job app allowing users to apply for jobs, upload resumes, and receive notifications.",
    image: "/home/job.avif?height=300&width=400&text=Job+Application+Portal",
    technologies: ["React Native", "Tailwind CSS", "MongoDb", "Firebase"],
  },
  {
    title: "Chai Cloud India Website",
    category: "Company Website",
    description: "A responsive website for Chai Cloud India, showcasing services, locations, and contact options.",
    image: "/home/chai.png?height=300&width=400&text=Chai+Cloud+India+Website",
    technologies: ["React", "Tailwind", "JavaScript", "Vite"],
  },
]


  return (
  
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <Image
            src={heroSlides[currentSlide].image || "/placeholder.svg"}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-10 z-10 relative p-10 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {heroSlides[currentSlide].subtitle}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">{heroSlides[currentSlide].description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link href="/contact">Get Started</Link>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 bg-white">
                  <Play className="mr-2 h-5 w-5" />
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* <div className="relative z-10">
                <Image
                  src="/home/hero1.jpg?height=500&width=600&text=Development+Workspace"
                  alt="Development workspace"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Live Project</span>
                  </div>
                </motion.div>
              </div> */}
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-blue-600 w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4 text-blue-600">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Digital Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom software development to strategic SEO optimization, we provide end-to-end digital solutions
              that drive business growth.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Work</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects that showcase our expertise and commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {portfolio.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </motion.div>
        </div>
      </section>

       <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <Badge className="mb-4 bg-blue-100 text-blue-800">Our Process</Badge>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Deliver Excellence</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our proven process ensures that every project is delivered on time, within budget, and exceeds
                    expectations.
                  </p>
                </motion.div>
      
                <div className="max-w-4xl mx-auto">
                <Image src="./service/workflow1.png" alt="Process" width={400} height={400} className="hidden md:block mx-auto w-full max-w-6xl" />
                <Image src="./service/workflow2.png" alt="Process Mobile" width={400} height={400} className="md:hidden mx-auto w-full max-w-md p-4" />
                  
                </div>
              </div>
            </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your project and create something amazing together. Get a free consultation today.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
