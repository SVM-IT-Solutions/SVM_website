"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Code2, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl"
            >
              {/* <Code2 className="h-6 w-6 text-white" /> */}
              <img src="/logo.png" alt="Logo" className="h-16 w-16" />
            </motion.div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              SVM IT SOLUTION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-8  ${
                scrolled ? "" : "bg-black/20 backdrop-blur-md rounded-md p-2 px-4"
              }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xl font-medium transition-colors ${
                scrolled ? "text-black" : "text-white"
              }   hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`} 
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <img src="/logo.png" alt="Logo" className="h-10 w-10" />
                  </div>
                  <span className="text-xl font-bold">SVM IT SOLUTION</span>
                </div>
                {/* <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button> */}
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                      pathname === item.href ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-6">
                  <Phone className="h-4 w-4 mr-2" />
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
