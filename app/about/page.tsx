"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
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

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We work closely with clients to understand their unique needs and deliver tailored solutions.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in code quality, design, and project delivery to ensure exceptional results.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Continuous Growth",
      description: "We believe in continuous learning and improvement, both for our team and our clients' businesses.",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300&text=Alex+Johnson",
      bio: "10+ years in software development and business strategy. Led multiple successful tech startups.",
      skills: ["Leadership", "Strategy", "Full-Stack Development"],
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Chen",
      bio: "Expert in scalable architecture and emerging technologies. Former senior engineer at major tech companies.",
      skills: ["System Architecture", "Cloud Computing", "AI/ML"],
    },
    {
      name: "Michael Rodriguez",
      role: "Head of SEO",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Rodriguez",
      bio: "SEO specialist with proven track record of improving organic rankings for 200+ businesses.",
      skills: ["SEO Strategy", "Content Marketing", "Analytics"],
    },
    {
      name: "Emily Davis",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Davis",
      bio: "Creative designer focused on user experience and modern design principles. Award-winning portfolio.",
      skills: ["UI/UX Design", "Branding", "User Research"],
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology",
    },
    {
      year: "2020",
      title: "First 50 Clients",
      description: "Reached our first major milestone of serving 50 satisfied clients",
    },
    { year: "2021", title: "Team Expansion", description: "Grew our team to 15+ skilled professionals" },
    {
      year: "2022",
      title: "100+ Projects",
      description: "Successfully completed over 100 projects across various industries",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in web development",
    },
    { year: "2024", title: "Global Reach", description: "Expanded services to clients across 15+ countries" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">About SVM IT SOLUTIONS</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transforming Ideas Into Digital Reality
              </h1>
              <p className="text-xl mb-8 opacity-90">
                We are a passionate team of developers, designers, and digital strategists committed to helping
                businesses thrive in the digital age through innovative solutions and exceptional service.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Work With Us</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Team+Working"
                alt="Our team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To empower businesses of all sizes with cutting-edge digital solutions that drive growth, enhance user
                experiences, and create lasting competitive advantages in an ever-evolving digital landscape.
              </p>
              <div className="space-y-4">
                {[
                  "Deliver exceptional software solutions",
                  "Provide strategic SEO and digital marketing",
                  "Build long-term partnerships with clients",
                  "Stay at the forefront of technology",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                To be the leading digital transformation partner, recognized globally for our innovative solutions,
                exceptional service, and the measurable impact we create for our clients' businesses.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=500&text=Our+Vision+Future"
                alt="Our vision"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-blue-600 mb-6 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Experts Behind Your Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of talented professionals brings together years of experience and expertise to deliver
              exceptional results.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Milestones That Define Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, here's our journey of growth and success.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
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
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
                <div className="w-1/2" />
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's work together to transform your business with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <Link href="/contact">Get Started Today</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
