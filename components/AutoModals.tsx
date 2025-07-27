// components/AutoModal.tsx
"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Services",
  "Other"
] as const;

const budgetRanges = [
  "under - $1,000",
  "$1000 - $2000",
  "$2000 - $4000",
  "$4000 - $8000",
  "$8000+",
  "Not sure yet"
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

export default function AutoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted:", formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: ""
        });
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-2xl my-8"
      >
        <Card className="shadow-xl relative max-h-[80vh] md:max-h-[90vh] flex flex-col">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-red-500  hover:text-gray-400 z-10 bg-white rounded-full p-1 shadow-lg"
            aria-label="Close modal"
          >
            ✕
          </button>
          
          <CardContent className="p-4 md:p-6 overflow-y-auto flex-grow">
            {submitSuccess ? (
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
                <p className="text-gray-700">Your message has been sent successfully.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Tell Us About Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full text-base h-12 md:h-10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full text-base h-12 md:h-10"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full text-base h-12 md:h-10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full text-base h-12 md:h-10"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      className="w-full text-base min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 md:py-2 transition-colors text-base"
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
                  </Button>
                </form>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}