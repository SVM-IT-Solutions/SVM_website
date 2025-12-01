"use client";
// app/ecommerce-solutions/page.tsx
import Link from 'next/link';
import { CheckCircle, ArrowRight, ShoppingCart, CreditCard, Truck, Shield, BarChart3, Users, Zap, Globe, Smartphone, Package, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function EcommerceSolutionsPage() {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Store Development",
      description: "Custom online stores built with modern platforms like Shopify, WooCommerce, and custom solutions.",
      features: ["Platform Selection", "Custom Design", "Product Management", "Inventory System"]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Integration",
      description: "Secure payment gateways and multiple payment options for seamless customer checkout.",
      features: ["Stripe & PayPal", "Multiple Currencies", "Secure Transactions", "Recurring Payments"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Shipping & Logistics",
      description: "Integrated shipping solutions and inventory management for efficient order fulfillment.",
      features: ["Shipping APIs", "Inventory Sync", "Order Tracking", "Multi-carrier Support"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Enterprise-level security and compliance with industry standards and regulations.",
      features: ["SSL Certificates", "PCI Compliance", "Data Encryption", "Regular Audits"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard to track sales, customer behavior, and business performance.",
      features: ["Sales Analytics", "Customer Insights", "Inventory Reports", "Performance Metrics"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "CRM Integration",
      description: "Customer relationship management integration for personalized marketing and support.",
      features: ["Customer Database", "Email Marketing", "Support System", "Loyalty Programs"]
    }
  ];

  const technologies = [
    { name: "Shopify", category: "Platform" },
    { name: "WooCommerce", category: "Platform" },
    { name: "Magento", category: "Platform" },
    { name: "BigCommerce", category: "Platform" },
    { name: "Stripe", category: "Payment" },
    { name: "PayPal", category: "Payment" },
    { name: "Square", category: "Payment" },
    { name: "ShipStation", category: "Shipping" },
    { name: "Mailchimp", category: "Marketing" },
    { name: "Klaviyo", category: "Marketing" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Hotjar", category: "Analytics" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your products, target audience, and business goals to create a customized e-commerce strategy."
    },
    {
      step: "02",
      title: "Design & UX",
      description: "Create intuitive, mobile-first designs that provide exceptional shopping experiences and drive conversions."
    },
    {
      step: "03",
      title: "Development",
      description: "Build your e-commerce store with robust features, secure payments, and seamless integrations."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Thorough testing across devices and platforms to ensure smooth performance and user experience."
    },
    {
      step: "05",
      title: "Launch & Deployment",
      description: "Seamless deployment with proper SEO setup, analytics, and performance optimization."
    },
    {
      step: "06",
      title: "Support & Growth",
      description: "Ongoing maintenance, updates, and optimization to scale your e-commerce business."
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Sell to customers worldwide with multi-currency and international shipping support."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Performance",
      description: "Lightning-fast loading times and optimized performance for better conversions."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First",
      description: "Responsive designs that provide perfect shopping experiences on all devices."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Grow your business with scalable infrastructure that handles increased traffic and sales."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://img.freepik.com/free-photo/online-shopping-concept_23-2151896842.jpg?t=st=1764161544~exp=1764165144~hmac=44d35c0f4ab8d4f344268a1c5cead802952a67defd0e86eacd61d068cf33d6b4&w=1480")',
              backgroundPosition: 'center 30%'
            }}
          />
          
          {/* Light Black Overlay */}
          <div className="absolute inset-0 bg-gray-900/80"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 via-blue-600/50 to-cyan-500/40"></div>
          
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
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <ShoppingCart className="w-5 h-5 mr-2 text-cyan-300" />
            <span className="text-sm font-semibold text-cyan-100">E-commerce Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">E-commerce</span>
            <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
          >
            Build scalable online stores that drive sales, enhance customer experiences, and grow your business globally
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
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-white to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
              <Button 
                asChild 
                size="lg" 
                className="relative bg-gray-900 text-white px-10 py-5 text-lg font-bold rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 group-hover:bg-gray-800 shadow-2xl"
              >
                <Link href="#contact">
                  <span className="flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Start Your Store
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Secondary Button */}
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
                <Link href="#services" className="flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Demo
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Comprehensive E-commerce Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              End-to-end solutions to build, launch, and grow your online store
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
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-gray-700/50 backdrop-blur-sm overflow-hidden relative h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-purple-900/20 group-hover:to-blue-900/20 transition-all duration-500"></div>
                  
                  <CardContent className="p-6 relative z-10 flex flex-col flex-grow">
                    <div className="relative mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm"
                        >
                          <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-green-500/30 transition-colors duration-300 flex-shrink-0">
                            <CheckCircle className="w-2.5 h-2.5 text-green-400" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="mt-auto pt-4 border-t border-gray-600 group-hover:border-gray-500 transition-colors duration-300"
                    >
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our E-commerce Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              Powerful features that drive growth and customer satisfaction
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
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <div className="text-cyan-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Launch Your Online Store?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Get a free e-commerce consultation and discover how we can help you build a successful online business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="tel:+1234567890">
                Call Us Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}