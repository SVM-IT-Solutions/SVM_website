"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TechStack from "@/components/TechStack";

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

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title:
        "Getting Started with Docker: Simplifying Containerization for Modern Development",
      excerpt:
        "Learn the fundamentals of Docker and how containerization can streamline your development workflow by making applications portable, scalable, and easy to deploy.",
      image:
        "/blog/docker.jpg?height=300&width=400&text=Web+Development+Trends+2024",
      author: "Shubham Singh",
      date: "December 06, 2025",
      readTime: "3 min read",
      category: "Devops",
      link: "https://getting-started-with-docker.hashnode.dev/getting-started-with-docker-simplifying-containerization-for-modern-development?ref=peerlist",
      featured: false,
    },

    {
      id: 4,
      title:
        "Why Developers Are Moving to Bun.js: A Faster JavaScript Runtime for the Modern Web",
      excerpt:
        "Discover why Bun.js is gaining traction among developers as a blazing-fast alternative to Node.js and how it’s reshaping the future of JavaScript runtime performance.",
      image: "/blog/bun.webp?height=300&width=400&text=SEO+Best+Practices",
      author: "Shubham Singh",
      date: "June 05, 2025",
      readTime: "2 min read",
      category: "JavaScript",
      link: "https://shubh1515.medium.com/why-developers-are-moving-to-bun-js-a-faster-javascript-runtime-for-the-modern-web-a71c51ddeaaf",
      featured: false,
    },

    {
      id: 3,
      title: "Building Voice Applications with Vapi",
      excerpt:
        "Voice AI is transforming how businesses interact with customers, automate workflows, and enhance user experiences.",
      image: "/blog/vapi.png?height=300&width=400&text=Mobile+First+Design",
      author: "Shubham Singh",
      date: "July 21, 2025",
      readTime: "4 min read",
      category: "development",
      link: "https://getting-started-with-docker.hashnode.dev/building-voice-applications-with-vapi",
      featured: false,
    },
    {
      id: 2,
      title: "PM2: The Ultimate Process Manager for Node.js Applications",
      excerpt:
        "Learn how PM2 simplifies Node.js application management with process monitoring, automatic restarts, and load balancing.",
      image: "/blog/pm2.jpg?height=300&width=400&text=PM2+for+Node.js",
      author: "Shubham Singh",
      date: "July 25, 2025",
      readTime: "6 min read",
      category: "Devops",
      link: "https://getting-started-with-docker.hashnode.dev/pm2-the-ultimate-process-manager-for-nodejs-applications",
      featured: true,
    },
    {
      id: 5,
      title: "Building a Smart AI Calling Agent",
      excerpt:
        "Learn how to create an intelligent AI calling agent by integrating Vapi, Twilio, and n8n to automate customer interactions.",
      image: "/blog/aicalling.jpg?height=300&width=400&text=AI+Calling+Agent",
      author: "Shubham Singh",
      date: "August 31, 2025",
      readTime: "8 min read",
      category: "AI/Automation",
      link: "https://medium.com/@shubh1515/building-a-smart-ai-calling-agent-with-vapi-twilio-and-n8n-ded9d5f27c4b",
      featured: true,
    },
    {
      id: 6,
      title: "JSON vs TOON: The New Battle of Data Formats in the AI Era",
      excerpt:
        "Explore the emerging competition between JSON and TOON data formats, and how TOON is optimized for AI applications with enhanced efficiency and performance.",
      image:
        "/blog/toon.png?height=300&width=400&text=UI+UX+Design+Principles",
      author: "Shubham Singh",
      date: "November 16, 2025",
      readTime: "4 min read",
      category: "Development",
      link:"https://shubh1515.medium.com/json-vs-toon-the-new-battle-of-data-formats-in-the-ai-era-bf072655adfe",
      featured: false,
    },
  ];

   blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const categories = ["All", "Web Development", "SEO", "Design", "Development"];
  const featuredPosts = blogPosts.filter((post) => post.featured);
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
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Insights & Expertise in Digital Innovation
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Stay updated with the latest trends, tips, and insights from our
              team of experts in web development, SEO, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Featured Articles
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and recent articles covering the latest in
              technology and digital marketing.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {featuredPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-white">
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-blue-600 text-white mb-2">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              All Articles
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore Our Knowledge Base
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our complete collection of articles, tutorials, and
              insights.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {post.date}
                        </span>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Read More
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter and get the latest articles, tips, and
              industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <TechStack />

      <Footer />
    </div>
  );
}
