"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from "@emailjs/browser";

import { Badge } from "@/components/ui/badge";
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
    BarChart2,
  FileText,
  Share2,
  Cpu,
  Clipboard,
  Link as LinkIcon,
  Briefcase,
  Clock,
  SearchCheck,
  ShieldCheck,
  Workflow,
  Medal,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { EmailJSResponseStatus } from "@emailjs/browser";
import Ratings from "@/components/Ratings";
import TechStack from "@/components/TechStack";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const formservices = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Services",
  "Other",
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
  "under - $200",
  "$200 - $500",
  "$500 - $800",
  "$800 - $1000",
  "$1000+",
  "Not sure yet",
] as const;

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_4mllidh", // e.g. 'service_xxxxx'
        "template_jt5e1yd", // e.g. 'template_abcd123'
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
        "t8KkbygttOWHkTyld" // e.g. 'ABC123xyz456'
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
          message: "",
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
      title: "SEO Optimization Services",
      subtitle: "Boost Visibility. Increase Traffic. Grow Revenue.",
      description:
        "Our data-driven SEO strategies help you dominate search rankings and achieve long-term online growth.",
       image: "/home/web1.jpeg?height=600&width=800&text=Website+Development",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const services = [
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Competitor Analysis",
      description:
        "We analyze competitors to find growth and improvement areas.",
      features: [
        "Responsive Design",
        "Fast Loading",
        "SEO Optimized",
        "Secure & Scalable",
      ],
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Keyword Research",
      description:
        "We use targeted keywords in headings and titles for better SEO.",
      features: [
        "Native iOS/Android",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "On-Page Optimization",
      description:
        "We optimize keywords, header tags, meta titles, and descriptions.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Content Strategy",
      ],
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Off-Page SEO",
      description:
        "We offer link building, guest blogging, and social media marketing.",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Technical SEO",
      description:
        "We optimize backend performance for faster and better rankings.",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <Clipboard className="h-8 w-8" />,
      title: "SEO Audits",
      description:
        "We analyze and improve site elements for better search results.",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: "Link Building",
      description:
        "We build high-quality backlinks to boost search rankings.",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
  ];

  const hiringModels = [
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Project Basis",
    description:
      "SEO specialists are assigned well-defined projects with a fixed scope, deadline, and predetermined pricing.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Remote Basis",
    description:
      "Businesses hire SEO experts remotely under flexible working conditions while ensuring high-quality performance.",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Hourly Basis",
    description:
      "SEO experts work and bill based on hourly engagement, offering flexibility and transparent cost control.",
  },
]

  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Award className="h-6 w-6" />,
    },
    {
      number: "30+",
      label: "Happy Clients",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      number: "96%",
      label: "Client Satisfaction",
      icon: <Star className="h-6 w-6" />,
    },
  ];

  const seoBenefits = [
  {
    icon: <SearchCheck className="h-10 w-10" />,
    title: "SEO Expert",
    description:
      "Boost your rankings with skilled SEO freelancers experienced in WordPress, Shopify, React, and custom websites.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Secure and Flexible",
    description:
      "We focus on scalability, fast loading performance, and secure payment workflows for a seamless working experience.",
  },
  {
    icon: <Workflow className="h-10 w-10" />,
    title: "End-to-End Support",
    description:
      "SEO freelancers manage the complete process—from strategy and planning to execution and reporting.",
  },
  {
    icon: <Medal className="h-10 w-10" />,
    title: "Proven Experience",
    description:
      "Hire diverse SEO experts with years of experience and a strong track record of delivering measurable results.",
  },
  ];
  
    const hireSteps = [
    "Create an account to access our SEO freelancing.",
    "Detail your SEO freelancing needs and requirements.",
    "Evaluate proposals from skilled SEO freelancers.",
    "Select the best SEO freelancer for your project.",
    "Process payment securely through our platform.",
  ];

  const jobSteps = [
    "Register to showcase your SEO skills.",
    "Highlight your expertise and past work.",
    "Find and apply for relevant SEO projects.",
    "Secure contracts with clients seeking your services.",
    "Get paid for your work through our secure system.",
  ];

const testimonials = [
  {
    name: "Ava Mitchell",
    role: "SEO Expert",
    availability: "Available Part Time",
    location: "Mohali",
    rate: "₹250/hr",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Liam Johnson",
    role: "SEO Specialist",
    availability: "Available Full Time",
    location: "Bangalore",
    rate: "₹300/hr",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Isabella Gomez",
    role: "Senior SEO Analyst",
    availability: "Available Part Time",
    location: "Pune",
    rate: "₹350/hr",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];


  const portfolio = [
    // {
    //   title: "Blogging Platform",
    //   category: "Full-Stack Web Development",
    //   description: "A feature-rich blogging website with user authentication, post creation, editing, and comment functionality.",
    //   image: "/home/blog.jpg?height=300&width=400&text=Blogging+Platform",
    //   technologies: ["React", "Node.js", "Express", "MongoDB"],
    // },
    {
      title: "BuildingPlanner",
      category: "Architectural & Design Services",
      description:
        "A Bangalore-based platform offering custom house plans, floor plans, 3D elevations, and ready-to-build home designs using WordPress.",
      image:
        "/home/buildingplanner.png?height=300&width=400&text=Building+Planner",
      technologies: ["WordPress", "Elementor", "WooCommerce"],
    },

    {
      title: "Job Application Portal",
      category: "Web Application",
      description:
        "A job portal where users can apply for jobs, upload resumes, and receive real-time notifications.",
      image: "/home/job.avif?height=300&width=400&text=Job+Application+Portal",
      technologies: ["React Native", "Tailwind CSS", "MongoDb", "Firebase"],
    },
    {
      title: "Chai Cloud India Website",
      category: "Company Website",
      description:
        "A responsive corporate website for Chai Cloud India, showcasing services, locations, and contact options.",
      image:
        "/home/chai.png?height=300&width=400&text=Chai+Cloud+India+Website",
      technologies: ["React", "Tailwind", "JavaScript", "Vite"],
    },
    {
      title: "Airways International Pvt. Ltd.",
      category: "Logistics & Courier Services",
      description:
        "A logistics and courier website offering door-to-door deliveries, air cargo, and parcel tracking services.",
      image:
        "/home/airwaysindia.png?height=300&width=400&text=Airways+International",
      technologies: ["WordPress", "PHP", "MySQL", "Elementor"],
    },
    {
      title: "The Pink Weave",
      category: "Ethical Fashion & Handmade Accessories",
      description:
        "An artisan-led e-commerce store selling handcrafted accessories like hairbands, earrings, purses, and bridal pieces.",
      image: "/home/pinkwave.png?height=300&width=400&text=The+Pink+Weave",
      technologies: ["Shopify", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Albylis Stone",
      category: "Quartz & Stone Worktop Supplier",
      description:
        "A UK business offering high-quality quartz, marble, granite, Silestone, and Dekton worktops—plus supply and fitting services.",
      image: "/home/albylis.png?height=300&width=400&text=Albylis+Stone",
      technologies: ["Wordpress", "Elementor", "HTML", "CSS"],
    },
  ];

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
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
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
              className="text-center lg:text-left lg:ml-10"
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
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg transition-colors">
                    <Play className="mr-2 h-5 w-5" />
                    View Our Work
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Transparent Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-lg p-6 lg:m-[3rem]">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-200">
                      Your message has been sent successfully. We'll get back to
                      you soon!
                    </p>
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
                            <option value="" className="text-gray-900">
                              Select a service
                            </option>
                            {formservices.map((service) => (
                              <option
                                key={service}
                                value={service}
                                className="text-gray-900"
                              >
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
                            <option value="" className="text-gray-900">
                              Select budget
                            </option>
                            {budgetRanges.map((range) => (
                              <option
                                key={range}
                                value={range}
                                className="text-gray-900"
                              >
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
                index === currentSlide
                  ? "bg-blue-600 w-8"
                  : "bg-white/50 hover:bg-white/70"
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
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Ratings />

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
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Freelance SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance Your Website's Visibility with Expert SEO Freelancers
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
                    <div className="mx-auto mb-6 flex items-center justify-center 
                        h-20 w-20 rounded-full bg-blue-100 text-blue-600 
                        group-hover:bg-blue-200 transition-all duration-300">
                      <div className="group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl text-center font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hire Freelance section */}
      <section className="py-20 bg-white from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
             Hire Freelance SEO Expert in three ways
            </h2>
          </motion.div>

          <motion.div
  variants={staggerContainer}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
>
  {hiringModels.map((model, index) => (
    <motion.div key={index} variants={fadeInUp}>
      <Card 
        className="h-full transition-all duration-300 hover:-translate-y-2 
        hover:bg-blue-50 hover:shadow-xl group"
      >
        <CardContent className="p-8">

          {/* Icon Circle */}
          <div className="mx-auto mb-6 flex items-center justify-center 
              h-20 w-20 rounded-full bg-blue-100 text-blue-600 
              group-hover:bg-blue-200 transition-all duration-300">
            <div className="group-hover:scale-110 transition-transform">
              {model.icon}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
            {model.title}
          </h3>

          <p className="text-gray-600 text-center">
            {model.description}
          </p>

        </CardContent>
      </Card>
    </motion.div>
  ))}
</motion.div>

        </div>
      </section>


      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
             Get Best SEO Experts At Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We let you concentrate on your strengths while our freelance SEO specialists make sure you succeed online!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {seoBenefits.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <h3 className="text-xl text-primary text-center pt-18 font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hire Freelance SEO Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find and hire top freelance SEO experts with ease and transparency.
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
            <Card className="relative h-full rounded-2xl hover:shadow-xl transition-all p-6 text-center">

              {/* Top Right Price Badge */}
              <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                {testimonial.rate}
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full border"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>

              {/* Role */}
              <p className="text-gray-600 mb-1">{testimonial.role}</p>

              {/* Availability */}
              <p className="text-primary font-medium mb-2">{testimonial.availability}</p>

              {/* Location */}
              <div className="flex justify-center items-center gap-1 text-gray-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 0c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
                  />
                </svg>
                {testimonial.location}
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-4">
                <button className="px-5 py-2 bg-primary text-white rounded-full hover:bg-orange-700 transition">
                  View Profile
                </button>
                <button className="px-5 py-2 bg-primary text-white rounded-full hover:bg-orange-700 transition">
                  Hire Me
                </button>
              </div>

            </Card>
          </motion.div>
          ))}
          </motion.div>
        </div>
      </section>



      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT BOX */}
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-10">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Hire SEO Freelancer For Your Projects
              </h2>

              <div className="space-y-6">
                {hireSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-primary font-semibold text-xl">
                      {index + 1}.
                    </span>
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* RIGHT BOX */}
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-10">
              <h2 className="text-2xl font-bold text-primary  mb-6">
                Find Freelance SEO Jobs
              </h2>

              <div className="space-y-6">
                {jobSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-primary font-semibold text-xl">
                      {index + 1}.
                    </span>
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>

    <section className="bg-gradient-to-br py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked Question
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left SEO Illustration */}
          <div className="flex justify-center">
            <Image
              src="https://www.freelancerforseo.in/assets/images/home/footerhomeIndia.webp" // replace with your image
              width={600}
              height={450}
              alt="SEO FAQ"
              className="rounded-xl"
            />
          </div>

          {/* Right Accordion */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">

            <Accordion type="single" collapsible className="w-full">

              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className=" data-[state=open]:text-primary font-semibold text-lg">
                  How does this platform help us connect with top SEO freelancers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Freelancerforseo connects you with top SEO experts who help improve
                  organic traffic and online visibility through link-building,
                  on-page SEO, content strategy, keyword research, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className=" data-[state=open]:text-primary text-gray-900 text-lg">
                  How can I hire a freelance SEO expert?
                </AccordionTrigger>
                <AccordionContent className=" data-[state=open]:text-primary text-gray-600">
                  You can register, create project requirements, receive proposals,
                  compare experts and select the best SEO freelancer for your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className=" data-[state=open]:text-primary text-gray-900 text-lg">
                  Will the freelancer provide SEO progress reports?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, freelancers provide regular reports including ranking,
                  optimization updates, and performance metrics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className=" data-[state=open]:text-primary text-gray-900 text-lg">
                  Can a hired SEO freelancer increase my brand visibility?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolutely, they use content optimization, keyword planning and
                  link-building strategies to improve brand reach.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b">
                <AccordionTrigger className=" data-[state=open]:text-primary text-gray-900 text-lg">
                  What results can I expect after hiring a freelancer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Results vary, but you will see improvements in ranking, traffic
                  and SEO health depending on your niche and competition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className=" data-[state=open]:text-primary text-gray-900 text-lg">
                  After hiring an SEO freelancer, how long until I see results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  SEO is long-term. You may notice improvements in 4–12 weeks
                  depending on website condition and competition.
                </AccordionContent>
              </AccordionItem>

            </Accordion>

          </div>

        </div>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your project and create something amazing together.
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <TechStack />

      <Footer />
    </div>
  );
}
