"use client";
// app/digital-marketing/page.tsx
import Link from 'next/link';
import { CheckCircle, ArrowRight, BarChart3, Target, Search, Users, Mail, Share2, TrendingUp, Globe, Smartphone, Zap, Play, ChevronDown, Download, Calendar, Sparkles, Phone, Clock, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Services",
      description: "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Content Strategy"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "PPC Advertising",
      description: "Maximize your ROI with targeted pay-per-click campaigns across Google, Facebook, and other platforms.",
      features: ["Google Ads", "Facebook Ads", "Conversion Tracking", "A/B Testing"]
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Marketing",
      description: "Build relationships and drive sales with personalized email campaigns and automation.",
      features: ["Newsletter Campaigns", "Automation Flows", "Segmentation", "Performance Analytics"]
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social media platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social", "Influencer Marketing"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts, engages, and converts your target audience.",
      features: ["Blog Content", "Video Production", "Infographics", "Content Distribution"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Analytics",
      description: "Gain insights into your website performance and user behavior to make data-driven decisions.",
      features: ["Google Analytics", "Conversion Tracking", "User Behavior", "Performance Reports"]
    }
  ];

  const technologies = [
    { name: "Google Analytics", category: "Analytics" },
    { name: "Google Ads", category: "Advertising" },
    { name: "Facebook Ads", category: "Advertising" },
    { name: "SEMrush", category: "SEO" },
    { name: "Ahrefs", category: "SEO" },
    { name: "Mailchimp", category: "Email" },
    { name: "HubSpot", category: "CRM" },
    { name: "Hootsuite", category: "Social Media" },
    { name: "Google Search Console", category: "SEO" },
    { name: "Hotjar", category: "Analytics" },
    { name: "Canva", category: "Design" },
    { name: "Google Tag Manager", category: "Analytics" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Analysis",
      description: "We analyze your business, competitors, and target audience to create a customized marketing strategy."
    },
    {
      step: "02",
      title: "Implementation",
      description: "Our team executes the marketing plan across all selected channels with precision and expertise."
    },
    {
      step: "03",
      title: "Optimization",
      description: "Continuous monitoring and optimization to improve performance and maximize your ROI."
    },
    {
      step: "04",
      title: "Reporting",
      description: "Detailed performance reports and insights to track progress and make data-driven decisions."
    },
    {
      step: "05",
      title: "Scaling",
      description: "Scale successful campaigns and strategies to drive exponential growth for your business."
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Ongoing management and updates to keep your marketing efforts effective and up-to-date."
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Targeted Reach",
      description: "Reach your ideal customers with precision targeting across multiple channels."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Measurable Results",
      description: "Track every campaign with detailed analytics and performance metrics."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Faster Growth",
      description: "Accelerate your business growth with proven marketing strategies."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Increased Engagement",
      description: "Build meaningful relationships with your audience through engaging content."
    }
  ];

  return (<>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
  {/* Background Image with Overlays */}
  <div className="absolute inset-0">
    {/* Main Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/full-shot-fit-man-working-out-with-smartphone_52683-92764.jpg?t=st=1764092796~exp=1764096396~hmac=c883525cd3203e57e3bcc4af9ec448ca9a3bc487f8404531fd0d56ff7d4f57b0&w=1480")',
        backgroundPosition: 'center 30%'
      }}
    />
    
    {/* Dark Overlay for Better Contrast */}
    <div className="absolute inset-0 bg-black/60"></div>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-blue-600/70 to-cyan-500/60"></div>
    
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
  
  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
    >
      <TrendingUp className="w-5 h-5 mr-2 text-cyan-300" />
      <span className="text-sm font-semibold text-cyan-100">Grow Your Business Online</span>
    </motion.div>

    {/* Main Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
    >
      <span className="block">Digital Marketing</span>
      <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
        That Drives Results
      </span>
    </motion.h1>
    
    {/* Subheading */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
    >
      Transform your online presence with data-driven strategies that increase visibility, 
      drive traffic, and maximize your ROI
    </motion.p>

    {/* Professional Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8"
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
          <Link href="#contact">
            <span className="flex items-center justify-center">
              <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Get Free Audit
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
          <Link href="#services" className="flex items-center justify-center">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            View Services
          </Link>
        </Button>
      </motion.div>
    </motion.div>

    {/* Trust Indicators */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
    >
      <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
        <Target className="w-8 h-8 text-cyan-300 mb-2" />
        <div className="text-cyan-100 font-semibold">Targeted Strategies</div>
        <div className="text-sm text-cyan-200/80">Reach Your Ideal Audience</div>
      </div>
      
      <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
        <TrendingUp className="w-8 h-8 text-purple-300 mb-2" />
        <div className="text-cyan-100 font-semibold">Proven Results</div>
        <div className="text-sm text-cyan-200/80">Data-Driven Performance</div>
      </div>
      
      <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
        <Zap className="w-8 h-8 text-blue-300 mb-2" />
        <div className="text-cyan-100 font-semibold">Fast Implementation</div>
        <div className="text-sm text-cyan-200/80">Quick Time to Value</div>
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
      <span className="text-sm mb-2">Discover More</span>
      <ChevronDown className="h-6 w-6" />
    </motion.div>
  </motion.div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Digital Marketing Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive marketing solutions to grow your business online
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

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="mt-auto pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Digital Marketing?
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with measurable results and sustainable growth
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Tools We Use
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools for maximum marketing performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Our Marketing Success Blueprint
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        A proven 6-step framework that transforms your marketing strategy into measurable results
      </motion.p>
    </div>

    {/* Interactive Timeline */}
    <div className="relative max-w-6xl mx-auto">
      {/* Main Timeline Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 transform -translate-x-1/2"></div>

      <div className="space-y-12 lg:space-y-0">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Content Card */}
            <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg relative"
                  >
                    {step.step}
                    {/* Pulse Animation */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 border-2 border-purple-400 rounded-2xl"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(6)].map((_, dotIndex) => (
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
                      <span className="text-sm text-gray-500 font-medium">
                        Step {index + 1}/6
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Timeline Dot */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </div>

            {/* Empty Space for Alignment */}
            <div className="lg:w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Interactive CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-20 text-center"
    >
      
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0">
    {/* Animated Grid */}
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
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      {/* Premium Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
      >
        <Sparkles className="w-5 h-5 mr-2 text-cyan-300" />
        <span className="text-sm font-semibold text-cyan-100">Free Marketing Audit</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
      >
        Ready to Transform Your
        <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Online Presence?
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-cyan-100 leading-relaxed"
      >
        Discover hidden opportunities and get a customized growth strategy with our comprehensive marketing audit
      </motion.p>

      {/* Perfect CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12"
      >
        {/* Primary Button - Animated Gradient */}
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
            <Link href="/contact">
              <span className="flex items-center justify-center">
                <BarChart3 className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Get Free Marketing Audit
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
          <div className="text-cyan-100 font-semibold">30-Minute Audit</div>
          <div className="text-sm text-cyan-200/80">Quick & Comprehensive</div>
        </div>
        
        <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
          <Award className="w-8 h-8 text-purple-300 mb-2" />
          <div className="text-cyan-100 font-semibold">No Obligation</div>
          <div className="text-sm text-cyan-200/80">100% Free Consultation</div>
        </div>
        
        <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
          <Shield className="w-8 h-8 text-blue-300 mb-2" />
          <div className="text-cyan-100 font-semibold">Actionable Insights</div>
          <div className="text-sm text-cyan-200/80">Customized Strategy</div>
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
    <Footer/>
  </>);
}