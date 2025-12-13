// app/mobile-development/page.tsx

"use client";

import Link from 'next/link';
import { CheckCircle, Smartphone, Zap, Shield, Code, Palette, Database, Cloud, ArrowRight, Rocket, Users, Globe, ChevronDown, Eye, Search, TestTube, Settings, Circle, Clock, Award, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function MobileDevelopmentPage() {

  // Helper function to get icons for each step
const getStepIcon = (index: number) => {
  const icons = [
    <Search className="w-8 h-8" key="strategy" />,
    <Palette className="w-8 h-8" key="design" />,
    <Code className="w-8 h-8" key="development" />,
    <TestTube className="w-8 h-8" key="testing" />,
    <Rocket className="w-8 h-8" key="deployment" />,
    <Settings className="w-8 h-8" key="support" />
  ];
  return icons[index] || <Circle className="w-8 h-8" />;
};
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "iOS App Development",
      description: "Native iOS applications built with Swift and SwiftUI for seamless performance on Apple devices.",
      features: ["Swift & SwiftUI", "App Store Optimization", "iOS SDK Integration", "ARKit & Core ML"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Android App Development",
      description: "Native Android apps using Kotlin and Jetpack Compose for optimal performance on Google's platform.",
      features: ["Kotlin & Jetpack Compose", "Material Design", "Google Play Optimization", "Android SDK"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cross-Platform Apps",
      description: "React Native and Flutter apps that run seamlessly on both iOS and Android from a single codebase.",
      features: ["React Native", "Flutter", "Single Codebase", "Faster Development"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Progressive Web Apps",
      description: "Web applications that behave like native apps with offline functionality and push notifications.",
      features: ["Offline Capability", "Push Notifications", "App-like Experience", "No App Store Required"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & API Integration",
      description: "Robust backend systems and seamless integration with third-party APIs and services.",
      features: ["RESTful APIs", "GraphQL", "Cloud Integration", "Real-time Data"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "App Maintenance & Support",
      description: "Ongoing maintenance, updates, and support to keep your app running smoothly and securely.",
      features: ["Regular Updates", "Security Patches", "Performance Monitoring", "Bug Fixes"]
    }
  ];

  const technologies = [
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift", category: "iOS" },
    { name: "SwiftUI", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "Jetpack Compose", category: "Android" },
    { name: "Firebase", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS Amplify", category: "Cloud" },
    { name: "GraphQL", category: "API" },
    { name: "TypeScript", category: "Language" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive app strategy."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Our designers create intuitive, user-friendly interfaces that provide exceptional user experiences."
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers build your app using the latest technologies and best practices for optimal performance."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing across multiple devices and platforms to ensure bug-free, smooth performance."
    },
    {
      step: "05",
      title: "Deployment",
      description: "We handle app store submissions and ensure your app meets all guidelines for successful launch."
    },
    {
      step: "06",
      title: "Support & Updates",
      description: "Continuous monitoring, maintenance, and updates to keep your app current and performing well."
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Increased Engagement",
      description: "Mobile apps keep users engaged with push notifications and personalized experiences."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Faster Performance",
      description: "Native apps provide faster performance and smoother user interactions compared to mobile websites."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Offline Access",
      description: "Users can access key features and content even without an internet connection."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Enhanced Features",
      description: "Access device features like camera, GPS, and sensors for richer functionality."
    }
  ];

  return (<>
      <Navbar />
        <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    {/* Main Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169864.jpg?t=st=1764089165~exp=1764092765~hmac=44f005799304011c0b15e5b5392abf7701ccc1c596ab44374b4dbe7f1927976c&w=1480")'
      }}
    />
    
    {/* Dark Overlay for Better Contrast */}
    <div className="absolute inset-0 bg-black/70"></div>
    
    {/* Gradient Accent */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
    
    {/* Subtle Pattern */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'
      }}
    />
  </div>

  {/* Floating Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-30"
    />
    <motion.div
      animate={{
        y: [0, 30, 0],
        x: [0, -15, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
      className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-500 rounded-full opacity-30"
    />
    <motion.div
      animate={{
        y: [0, -15, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40"
    />
  </div>
  
  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
    >
      <span className="block">Mobile App</span>
      <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Development
      </span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300"
    >
      Transform your ideas into powerful mobile experiences that users love and engage with
    </motion.p>

    {/* Professional Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-5 justify-center items-center"
    >
      {/* Primary Button */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <Button 
          asChild 
          size="lg" 
          className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 group min-w-[200px]"
        >
          <Link href="#contact">
            <span className="flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </Button>
      </motion.div>

      {/* Secondary Button */}
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button 
          asChild 
          variant="outline" 
          size="lg"
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold rounded-xl hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[160px]"
        >
          <Link href="#portfolio" className="flex items-center justify-center">
            <Eye className="w-4 h-4 mr-2" />
            View Portfolio
          </Link>
        </Button>
      </motion.div>
    </motion.div>

    {/* Additional Info */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400 text-sm"
    >
      <div className="flex items-center">
        <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
        <span>Native iOS & Android</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
        <span>Cross-Platform Solutions</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
        <span>24/7 Support</span>
      </div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center text-gray-400 cursor-pointer"
      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span className="text-sm mb-2">Scroll Down</span>
      <ChevronDown className="h-6 w-6" />
    </motion.div>
  </motion.div>
</section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Our Mobile Development Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Comprehensive mobile solutions for iOS, Android, and cross-platform development
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
          <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm overflow-hidden relative h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-500"></div>
            
            <CardContent className="p-6 relative z-10 flex flex-col flex-grow">
              <div className="relative mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
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

              <div
                className="mt-auto pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  Learn More
                  <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mobile Apps?
            </h2>
            <p className="text-xl text-gray-600">
              Mobile apps offer unique advantages that drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Technologies We Use
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600"
      >
        Modern tech stack for high-performance mobile applications
      </motion.p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-purple-600 font-semibold text-lg mb-2">
            {tech.name}
          </div>
          <div className="text-sm text-gray-500">
            {tech.category}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Process Section */}
     <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        How We Build Your App
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Transparent process with measurable milestones and continuous collaboration
      </motion.p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {processSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="group"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden border border-gray-100">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(index + 1) * 16.66}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-600"
              />
            </div>

            {/* Step Number */}
            <div className="relative mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 border-4 border-purple-200 rounded-2xl flex items-center justify-center mx-auto group-hover:border-purple-300 transition-colors duration-300 relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300">
                  {step.step}
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-600 transition-colors duration-300">
              {step.title}
            </h3>
            
            <p className="text-gray-600 text-center leading-relaxed">
              {step.description}
            </p>

            {/* Step Indicator */}
            <div className="flex justify-center mt-6 space-x-1">
              {processSteps.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    dotIndex === index
                      ? 'bg-purple-600 scale-125'
                      : dotIndex < index
                      ? 'bg-blue-400'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0">
    {/* Animated Grid Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
    
    {/* Floating Shapes */}
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
      className="absolute top-1/4 left-1/4 w-12 h-12 bg-cyan-400/20 rounded-full blur-sm"
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

  {/* Main Content */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
      >
        <Sparkles className="w-5 h-5 mr-2 text-cyan-300" />
        <span className="text-sm font-semibold text-cyan-100">Limited Time Offer</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
      >
        Ready to Launch Your
        <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Mobile App?
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-cyan-100 leading-relaxed"
      >
        Let's transform your vision into a stunning mobile experience. 
        Get started with a free consultation and project roadmap.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12"
      >
        {/* Primary Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <Button 
            asChild 
            size="lg" 
            className="relative bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 group min-w-[220px]"
          >
            <Link href="/contact">
              <span className="flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                Start Free Consultation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </motion.div>

        {/* Secondary Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold rounded-2xl hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[180px]"
          >
            <Link href="tel:+1234567890" className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Call Now
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
      >
        <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
          <Clock className="w-8 h-8 text-cyan-300 mb-2" />
          <div className="text-cyan-100 font-semibold">24-48 Hours</div>
          <div className="text-sm text-cyan-200/80">Response Time</div>
        </div>
        
        <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
          <Award className="w-8 h-8 text-purple-300 mb-2" />
          <div className="text-cyan-100 font-semibold">100% Free</div>
          <div className="text-sm text-cyan-200/80">Initial Consultation</div>
        </div>
        
        <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
          <Shield className="w-8 h-8 text-blue-300 mb-2" />
          <div className="text-cyan-100 font-semibold">NDA Protected</div>
          <div className="text-sm text-cyan-200/80">Your Ideas Are Safe</div>
        </div>
      </motion.div>
    </motion.div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="w-full h-12 text-white fill-current"
    >
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
    </svg>
  </div>
</section>
        </div>
      <Footer />
  </>);
}