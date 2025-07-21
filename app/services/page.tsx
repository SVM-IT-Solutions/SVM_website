"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Search,
  Globe,
  ShoppingCart,
  Palette,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
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

export default function ServicesPage() {
const services = [
  {
    icon: <Code className="h-12 w-12" />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Responsive Design",
      "Fast Loading Speed",
      "SEO Optimized",
      "Cross-browser Compatible",
      "Secure & Scalable",
      "Modern Frameworks",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    startingPrice: "$799",
    image: "/service/website1.jpg",
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "iOS & Android",
      "Cross-platform Solutions",
      "Native Performance",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    startingPrice: "$1,499",
    image: "/service/mob1.jpg",
  },
  {
    icon: <Search className="h-12 w-12" />,
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your website.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Performance Tracking",
    ],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
    startingPrice: "$299/month",
    image: "/service/seo1.jpg",
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Digital Marketing",
    description:
      "Complete digital marketing solutions including social media, PPC, and content marketing to grow your business.",
    features: [
      "Social Media Marketing",
      "Google Ads Management",
      "Content Marketing",
      "Email Marketing",
      "Conversion Optimization",
      "Analytics & Reporting",
    ],
    technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "HubSpot"],
    startingPrice: "$499/month",
    image: "/service/dm1.jpg",
  },
  {
    icon: <ShoppingCart className="h-12 w-12" />,
    title: "E-commerce Solutions",
    description:
      "Complete e-commerce platforms with payment integration, inventory management, and conversion optimization.",
    features: [
      "Custom E-commerce Sites",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Multi-vendor Support",
      "Mobile Commerce",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
    startingPrice: "$1,199",
    image: "/service/ecommerce1.jpg",
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive and engaging experiences for your digital products.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems",
      "Brand Identity",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    startingPrice: "$599",
    image: "/service/uiux1.jpg",
  },
]


  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      step: "02",
      title: "Strategy & Design",
      description:
        "Our team creates a comprehensive strategy and designs that align with your brand and user expectations.",
      icon: <Palette className="h-8 w-8" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using best practices and conduct thorough testing to ensure quality and performance.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "After successful launch, we monitor performance and continuously optimize for better results.",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "We deliver projects on time without compromising on quality.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "All our solutions are built with security and reliability as top priorities.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven Results",
      description: "Our track record speaks for itself with 100+ successful projects.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Work with experienced professionals who are passionate about technology.",
    },
  ]

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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Digital Solutions for Your Business
            </h1>
            <p className="text-xl mb-8 opacity-90">
              From web development to digital marketing, we provide end-to-end solutions that drive growth and success
              for businesses of all sizes.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Get Free Consultation</Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">{service.icon}</div>
                    </div>

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <Badge className="bg-blue-100 text-blue-800">From {service.startingPrice}</Badge>
                      </div>

                      <p className="text-gray-600 mb-6">{service.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
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

            {/* {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="text-blue-600 mr-4">{step.icon}</div>
                        <div className="text-3xl font-bold text-blue-600">{step.step}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))} */}
          <Image src="./service/workflow1.png" alt="Process" width={400} height={400} className="hidden md:block mx-auto w-full max-w-6xl" />
          <Image src="./service/workflow2.png" alt="Process Mobile" width={400} height={400} className="md:hidden mx-auto w-full max-w-md p-4" />
            
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-blue-600 mb-6 flex justify-center">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your project requirements and create a custom solution that drives results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <Link href="/contact">Get Free Quote</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
