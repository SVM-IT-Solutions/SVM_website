"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Web Development", href: "/webdevelopment" },
    { name: "Mobile App Development", href: "/appdevelopment" },
    { name: "SEO Optimization", href: "/" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "E-Commerce Solutions", href: "/ecommerce-solutions" },
    { name: "UI / UX Design", href: "/uxuidesign" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

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
              <img src="/logo.png" alt="Logo" className="h-14 w-14" />
            </motion.div>
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              SVM IT SOLUTION
            </span>
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <nav
            className={`hidden lg:flex items-center space-x-8 ${
              scrolled
                ? ""
                : "bg-black/20 backdrop-blur-md rounded-md px-4 py-2"
            }`}
          >
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition ${
                  pathname === item.href
                    ? "text-blue-600"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                } hover:text-blue-600`}
              >
                {item.name}
              </Link>
            ))}

            {/* ===== Services (Click → /services, Hover → Dropdown) ===== */}
            <div className="relative group">
              <Link
                href="/services"
                className={`flex items-center gap-1 text-lg font-medium ${
                  pathname === "/services"
                    ? "text-blue-600"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                } hover:text-blue-600`}
              >
                Services
                <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="py-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition ${
                  pathname === item.href
                    ? "text-blue-600"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                } hover:text-blue-600`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              <a
                href="https://wa.me/6388744723?text=Hello%20SVM%20IT%20Solution,%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Quote
              </a>
            </Button>
          </div>

          {/* ================= Mobile Menu ================= */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8 bg-white " />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>

                {/* Mobile Services */}
                <div>
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                  >
                    Services
                  </Link>

                  <button
                    onClick={() => setOpenServices(!openServices)}
                    className="flex w-full justify-between items-center mt-2 text-sm text-gray-600"
                  >
                    View Services
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        openServices ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openServices && (
                    <div className="ml-4 mt-3 flex flex-col space-y-3">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                  Portfolio
                </Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-6">
                  <Phone className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
