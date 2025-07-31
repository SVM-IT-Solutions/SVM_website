"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import emailjs from '@emailjs/browser';

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
  Send,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { EmailJSResponseStatus } from "@emailjs/browser"

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

const formservices = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Services",
  "Other"
] as const;

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};
const budgetRanges = [
  "under - $1,000",
  "$1000 - $2000",
  "$2000 - $4000",
  "$4000 - $8000",
  "$8000+",
  "Not sure yet"
] as const;

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

   const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e: FormEvent) => {
   e.preventDefault();
   setIsSubmitting(true);
 
   try {
     const result = await emailjs.send(
       'service_4mllidh',     // e.g. 'service_xxxxx'
       'template_jt5e1yd',    // e.g. 'template_abcd123'
       {
         from_name: formData.name,
         from_email: formData.email,
         phone: formData.phone,
         company: formData.company,
         service: formData.service,
         budget: formData.budget,
         message: formData.message,
       },
       't8KkbygttOWHkTyld'       // e.g. 'ABC123xyz456'
     );
 
     console.log("Email sent successfully:", result.text);
 
     setSubmitSuccess(true);
     setTimeout(() => {
    
       setFormData({
         name: "",
         email: "",
         phone: "",
         company: "",
         service: "",
         budget: "",
         message: ""
       });
       setSubmitSuccess(false);
     }, 2000);
   } catch (error) {
     console.error("EmailJS error:", error);
   } finally {
     setIsSubmitting(false);
   }
 };

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
    image: "/home/web1.jpeg?height=600&width=800&text=Website+Development",
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
    name: "Ava Mitchell",
    company: "BrightPixel Agency",
    role: "Product Manager",
    content:
      "Working with this team was a game-changer. They delivered our website ahead of schedule, and the UX/UI design is stunning. We've seen a 40% increase in engagement.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Liam Johnson",
    company: "NovaTech Solutions",
    role: "CTO",
    content:
      "Their backend architecture and API development helped us scale without a hitch. Performance improved drastically, and our dev team loves working with their clean codebase.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Isabella Gomez",
    company: "MarketMuse",
    role: "Head of Marketing",
    content:
      "They handled our digital marketing campaign with precision. Our leads doubled within a month and the ROI was well beyond expectations.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

];



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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70" />
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
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
              <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                {heroSlides[currentSlide].subtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg transition-colors">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Transparent Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-lg p-6 m-[3rem]">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-200">Your message has been sent successfully. We'll get back to you soon!</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                    Transform Your Vision Into Reality
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                          Service *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                        >
                          <option value="" className="text-gray-900">Select a service</option>
                          {formservices.map((service) => (
                            <option key={service} value={service} className="text-gray-900">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                          Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                        >
                          <option value="" className="text-gray-900">Select budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="text-gray-900">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Tell us about your project..."
                        className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 px-4 text-white rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-blue-600 w-8" : "bg-white/50 hover:bg-white/70"
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
