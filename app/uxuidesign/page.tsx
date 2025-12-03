"use client"
import Link from 'next/link';
import { CheckCircle, ArrowRight, Palette, Layout, Smartphone, Users, Zap, Eye, Figma, Code, PenTool, Layers, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function UIUXDesignPage() {
  const services = [
    {
      icon: <Layout className="h-8 w-8" />,
      title: "User Interface Design",
      description: "Beautiful, intuitive interfaces that engage users and enhance brand identity across all devices.",
      features: ["Visual Design", "Component Libraries", "Design Systems", "Style Guides"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Experience Design",
      description: "User-centered designs focused on creating seamless, enjoyable, and accessible experiences.",
      features: ["User Research", "Information Architecture", "User Flows", "Accessibility"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Design",
      description: "Mobile-first designs optimized for touch interfaces and responsive across all screen sizes.",
      features: ["iOS & Android", "Responsive Design", "Touch Optimization", "App Store Assets"]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Interaction Design",
      description: "Micro-interactions and animations that bring designs to life and enhance user engagement.",
      features: ["Motion Design", "Micro-interactions", "Animation", "Prototyping"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand Identity",
      description: "Cohesive visual identities that communicate your brand's personality and values.",
      features: ["Logo Design", "Color Palettes", "Typography", "Brand Guidelines"]
    },
    {
      icon: <Figma className="h-8 w-8" />,
      title: "Prototyping & Testing",
      description: "Interactive prototypes for user testing and stakeholder presentations before development.",
      features: ["Wireframes", "Interactive Prototypes", "User Testing", "Design Handoff"]
    }
  ];

  const tools = [
    { name: "Figma", category: "Design Tool" },
    { name: "Adobe XD", category: "Design Tool" },
    { name: "Sketch", category: "Design Tool" },
    { name: "Adobe Creative Suite", category: "Design Tools" },
    { name: "InVision", category: "Prototyping" },
    { name: "Framer", category: "Prototyping" },
    { name: "Principle", category: "Animation" },
    { name: "Miro", category: "Collaboration" },
    { name: "Zeplin", category: "Handoff" },
    { name: "UserTesting", category: "Research" },
    { name: "Hotjar", category: "Analytics" },
    { name: "Google Analytics", category: "Analytics" }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understand user needs, business goals, and market trends through comprehensive research."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Define user personas, user journeys, and create a design strategy aligned with objectives."
    },
    {
      step: "03",
      title: "Wireframing",
      description: "Create low-fidelity wireframes to establish structure and functionality before visual design."
    },
    {
      step: "04",
      title: "Visual Design",
      description: "Develop high-fidelity designs with colors, typography, and visual elements that reflect the brand."
    },
    {
      step: "05",
      title: "Prototyping",
      description: "Build interactive prototypes to test usability and gather feedback before development."
    },
    {
      step: "06",
      title: "Testing & Iteration",
      description: "Conduct user testing, gather insights, and refine designs based on feedback and data."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Increased Conversions",
      description: "Well-designed interfaces that guide users naturally toward conversion points."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Better User Engagement",
      description: "Intuitive designs that keep users engaged and reduce bounce rates."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Brand Recognition",
      description: "Consistent visual identity that builds brand recognition and trust."
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Faster Development",
      description: "Clear design specifications that speed up development and reduce revisions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
      {/* Hero Section with Banner Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Banner Background Image */}
        <div className="absolute inset-0">
          {/* Main Banner Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
              backgroundPosition: 'center 40%'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-pink-600/70 to-blue-600/60"></div>
          
          {/* Dark Overlay for Better Contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Subtle Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/axiom-pattern.png")'
            }}
          />
        </div>

        {/* Floating Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-3/4 left-3/4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Design Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Sparkles className="w-5 h-5 mr-2 text-pink-300" />
            <span className="text-sm font-semibold text-pink-100">Award-Winning Design</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">UI/UX Design</span>
            <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              That Delights Users
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
          >
            Create exceptional digital experiences that engage users, drive conversions, and build lasting brand loyalty
          </motion.p>

          {/* Professional Design Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            {/* Primary Button - Animated Design Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-white to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
              <Button 
                asChild 
                size="lg" 
                className="relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-5 text-lg font-bold rounded-2xl border border-gray-200 hover:border-pink-400 transition-all duration-300 shadow-2xl"
              >
                <Link href="#contact">
                  <span className="flex items-center justify-center">
                    <Palette className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Start Your Design Project
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Secondary Button - Glass Morphism */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-5 text-lg font-bold rounded-2xl hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[180px]"
              >
                <Link href="#portfolio" className="flex items-center justify-center">
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Portfolio
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our UI/UX Design Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive design solutions that create beautiful, functional, and user-friendly experiences
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-pink-50 group-hover:to-purple-50 transition-all duration-500"></div>
                  
                  <CardContent className="p-6 relative z-10 flex flex-col flex-grow">
                    <div className="relative mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-sm"
                        >
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 group-hover:bg-green-200 transition-colors duration-300 flex-shrink-0">
                            <CheckCircle className="w-2.5 h-2.5 text-green-600" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="mt-auto pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
                    >
                      <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A user-centered approach that ensures exceptional design outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Design Exceptional Experiences?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Let's create beautiful, user-friendly designs that delight your customers and drive business results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                <Link href="/contact">
                  Start Design Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="#portfolio">
                  View Design Portfolio
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}