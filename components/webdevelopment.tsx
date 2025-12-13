// app/web-development/page.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Code, Smartphone, Globe, Database,ChevronDown , Zap, ArrowRight, ExternalLink, Settings, Clock, Award, Phone, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import CustomCursor from '@/components/CustomCursor';
import FAQItem from '@/components/faq-webdevelopment';
import Footer from '@/components/footer';



export default function WebDevelopmentPage() {

 const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    image: "/images/services/web-apps.svg",
    title: "Custom Web Applications",
    description: "Scalable web applications built with modern frameworks for optimal performance.",
    features: [
      "Real-time features",
      "User authentication",
      "Database management",
      "Cloud deployment"
    ]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    image: "/images/services/responsive-design.svg",
    title: "Responsive Web Design",
    description: "Mobile-first websites that deliver perfect experiences across all devices.",
    features: [
      "Mobile optimization",
      "Cross-browser compatible",
      "Fast loading",
      "SEO-friendly"
    ]
  },
  {
    icon: <Database className="h-8 w-8" />,
    image: "/images/services/ecommerce.svg",
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payment processing and analytics.",
    features: [
      "Payment integration",
      "Inventory management",
      "Order tracking",
      "Security"
    ]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    image: "/images/services/pwa.svg",
    title: "Progressive Web Apps",
    description: "Web apps that feel like native apps with offline functionality.",
    features: [
      "Offline capability",
      "App-like experience",
      "Push notifications",
      "Fast performance"
    ]
  },
  {
    icon: <Code className="h-8 w-8" />,
    image: "/images/services/api.svg",
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs for seamless data integration.",
    features: [
      "REST & GraphQL APIs",
      "Third-party integration",
      "Documentation",
      "Security"
    ]
  },
  {
    icon: <Settings className="h-8 w-8" />,
    image: "/images/services/maintenance.svg",
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your website running smoothly.",
    features: [
      "Regular updates",
      "Security monitoring",
      "Performance optimization",
      "24/7 support"
    ]
  }
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline varies based on project complexity. Basic websites typically take 2-4 weeks, while complex web applications with custom features can take 3-6 months. We provide a detailed project timeline during our initial consultation.",
    additionalInfo: "Average timelines: Landing Page (2-3 weeks), Business Website (3-5 weeks), E-commerce Store (4-8 weeks), Custom Web App (8-16 weeks)"
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance packages that include regular updates, security monitoring, performance optimization, and feature enhancements. Our support team is available 24/7 for urgent issues.",
    additionalInfo: "Maintenance plans start at $99/month and include hosting, security updates, and technical support."
  },
  {
    question: "Can you work with our existing designs or templates?",
    answer: "Absolutely! We can work with your existing designs, templates, or brand guidelines. We're flexible and can adapt to your specific requirements while ensuring the final product meets modern web standards.",
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use modern technologies including Next.js, React, TypeScript, Node.js, and modern CSS frameworks. Our stack is chosen based on project requirements to ensure optimal performance, scalability, and maintainability.",
    additionalInfo: "Core technologies: Frontend (Next.js, React, TypeScript), Backend (Node.js, Python), Databases (MongoDB, PostgreSQL), DevOps (AWS, Docker)"
  },
  {
    question: "Do you offer SEO services with website development?",
    answer: "Yes, SEO is integrated into our development process. We build websites with SEO best practices including fast loading speeds, mobile optimization, clean code structure, and proper meta tags. We also offer ongoing SEO services.",
  },
  {
    question: "What's included in your web development packages?",
    answer: "Our packages include responsive design, SEO optimization, performance optimization, security implementation, cross-browser testing, and basic training. Additional services like content creation and advanced features are available.",
    additionalInfo: "All packages include: Responsive Design, SEO Setup, Performance Optimization, Security Features, 30 Days Support"
  },
  {
    question: "Can you migrate our existing website to a new platform?",
    answer: "Yes, we specialize in website migrations. We can seamlessly transfer your content, design, and functionality to modern platforms while maintaining SEO rankings and improving performance.",
  },
  {
    question: "What about website security and data protection?",
    answer: "Security is our top priority. We implement SSL certificates, regular security updates, secure coding practices, and compliance with data protection regulations like GDPR. All websites include basic security measures.",
    additionalInfo: "Security features: SSL Certificates, Regular Updates, Secure Hosting, Data Encryption, GDPR Compliance"
  },
  {
    question: "Do you provide hosting and domain services?",
    answer: "Yes, we offer reliable hosting solutions optimized for performance and security. We can help you purchase domains or transfer existing ones. Our hosting includes automatic backups and 99.9% uptime guarantee.",
  },
  {
    question: "What is your payment structure?",
    answer: "We typically work with a 50% upfront and 50% upon completion model for fixed-price projects. For larger projects, we can arrange milestone-based payments. We also offer monthly retainers for ongoing work.",
    additionalInfo: "Payment options: Bank Transfer, Credit Card, PayPal, Payment Plans Available"
  },
  {
    question: "Can you integrate third-party tools and APIs?",
    answer: "Yes, we have extensive experience integrating various third-party services including payment gateways, CRM systems, marketing tools, analytics platforms, and custom APIs to extend your website's functionality.",
  },
  {
    question: "What happens after the website is launched?",
    answer: "After launch, we provide 30 days of free support to fix any issues. We then offer ongoing maintenance plans, analytics setup, performance monitoring, and can help with future updates and enhancements.",
  }
];

  const technologies = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "REST APIs", category: "API" },
    { name: "Tailwind CSS", category: "Styling" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes for your approval."
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers bring your vision to life with clean, efficient code."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your website works perfectly across all devices."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We deploy your website and ensure everything runs smoothly."
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support and updates to keep your website running optimally."
    }
  ];

  return ( <>
      {isClient && <CustomCursor />}
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
      poster="https://cdn.pixabay.com/video/2022/10/24/136268-764387688_tiny.jpg"
    >
      <source src="https://cdn.pixabay.com/video/2022/10/24/136268-764387688_large.mp4" type="video/mp4" />
      {/* Fallback image if video doesn't load */}
      <div 
        className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-700"
        style={{
          backgroundImage: 'url("/fallback-hero-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </video>
    
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  </div>

  {/* Content - Right Side */}
  <div className="relative z-10 text-white px-4 max-w-6xl mx-auto w-full">
    <div className="flex justify-start">
      <div className="max-w-2xl text-left">
        {/* Animated Main Heading */}
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block"
          >
            Professional
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Web Development
          </motion.span>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed"
        >
          Building{" "}
          <motion.span
            animate={{ 
              color: ['#60A5FA', '#A78BFA', '#60A5FA']
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="font-semibold"
          >
            modern
          </motion.span>
          ,{" "}
          <motion.span
            animate={{ 
              color: ['#A78BFA', '#60A5FA', '#A78BFA']
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: 0.5
            }}
            className="font-semibold"
          >
            scalable
          </motion.span>
          , and{" "}
          <motion.span
            animate={{ 
              color: ['#60A5FA', '#A78BFA', '#60A5FA']
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: 1
            }}
            className="font-semibold"
          >
            high-performance
          </motion.span>{" "}
          web applications
        </motion.p>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-lg md:text-xl mb-10 text-gray-200"
        >
          Transform your ideas into powerful digital experiences with cutting-edge technology and innovative solutions
        </motion.p>

        {/* Animated CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.7 }}
  className="flex flex-col sm:flex-row gap-4 justify-start"
>
  <motion.div
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button 
      asChild 
      size="lg" 
      className="bg-gradient-to-br from-blue-500/90 to-purple-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:from-blue-600/90 hover:to-purple-700/90 transition-all duration-500 group relative overflow-hidden"
    >
      <Link href="#contact">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <span className="relative z-10 flex items-center">
          Start Your Project
          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
        </span>
      </Link>
    </Button>
  </motion.div>
  
  <motion.div
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button 
      asChild 
      variant="outline" 
      size="lg"
      className="backdrop-blur-md bg-white/5 border-2 border-white/30 text-white px-8 py-4 text-lg font-bold rounded-2xl hover:bg-white/15 hover:border-white/50 transition-all duration-500 shadow-xl hover:shadow-white/25 group"
    >
      <Link href="#portfolio">
        <span className="flex items-center">
          View Portfolio
          <ExternalLink className="ml-3 h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
        </span>
      </Link>
    </Button>
  </motion.div>
</motion.div>
      </div>
    </div>
  </div>

  {/* Animated Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 2.2 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center text-white cursor-pointer"
      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span className="text-sm mb-2">Scroll Down</span>
      <ChevronDown className="h-6 w-6" />
    </motion.div>
  </motion.div>

  {/* Floating Elements Animation */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating circles */}
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
      className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20"
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
        delay: 1
      }}
      className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-20"
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
        delay: 2
      }}
      className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full opacity-30"
    />
  </div>
</section>

      {/* Services Section */}
      <section className="py-20 bg-white">    
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Our Web Development Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Comprehensive web solutions tailored to your business needs
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
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500"></div>
            
            <CardContent className="p-6 relative z-10 flex flex-col flex-grow">
              {/* Icon/Image Container */}
              <div className="relative mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  {/* Replace with your actual images */}
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                   <img 
                      src={`/images/services/service-${index + 1}.svg`} 
                      alt={service.title}
                      className="w-6 h-6 filter brightness-0 invert"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                {/* Floating Element */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                {service.description}
              </p>

              {/* Features List */}
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

              {/* Hover Button - CORRECTED */}
              <div
                
                className="mt-auto overflow-hidden"
              >
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardContent>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-purple-600/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-500"></div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Modern tech stack for robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-blue-600 font-semibold text-lg mb-2">
                  {tech.name}
                </div>
                <div className="text-sm text-gray-500">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Our Development Journey
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600"
      >
        Step-by-step process from concept to launch
      </motion.p>
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            {/* Timeline Connector */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 z-0"></div>
            )}
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative z-10 group-hover:border-blue-200">
              {/* Step Badge */}
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {step.step}
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>

              {/* Progress Indicator */}
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(index + 1) * 16.66}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
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
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/10 rounded-full"
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
      className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-white/10 rounded-full"
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
      className="absolute top-3/4 left-3/4 w-4 h-4 bg-white/10 rounded-full"
    />
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    {/* Main Content */}
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
        className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        <span className="text-sm font-semibold">Let's Get Started</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
      >
        Ready to Build Your Next
        <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
          Web Project?
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-100 leading-relaxed"
      >
        Let's discuss your ideas and create something amazing together. 
        Your vision, our expertise - perfect combination for success.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
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
            className="relative bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 group min-w-[200px]"
          >
            <Link href="/contact">
              <span className="flex items-center justify-center">
                Get Free Consultation
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
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold rounded-2xl hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[160px]"
          >
            <Link href="tel:+1234567890" className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-200 text-sm"
      >
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span>24/7 Support Available</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>Free Initial Consultation</span>
        </div>
        <div className="flex items-center">
          <Award className="w-4 h-4 mr-2" />
          <span>100% Satisfaction Guaranteed</span>
        </div>
      </motion.div>
    </motion.div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="w-full h-12 text-gray-50 fill-current"
    >
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
    </svg>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Everything you need to know about our web development process and services
      </motion.p>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index + Math.ceil(faqs.length / 2)} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Link href="/contact">
              Get In Touch
              <MessageCircle className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Link href="mailto:hello@example.com">
              Email Us
              <Mail className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
    <Footer />
  </>);
}