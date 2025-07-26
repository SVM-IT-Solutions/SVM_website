import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AutoModal from "@/components/AutoModals"
import { useAutoModal} from "@/hooks/useAutoModal"
import ModalProvider from "@/components/ModalProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SVM IT SOLUTIONS - Leading Web Development & SEO Company",
  description:
    "Transform your digital presence with our expert web development, mobile app development, SEO optimization, and digital marketing services. 100+ successful projects delivered.",
  keywords: [
    "web development",
    "mobile app development",
    "SEO services",
    "digital marketing",
    "software development",
    "UI/UX design",
    "e-commerce solutions",
  ],
  authors: [{ name: "SVM IT SOLUTIONS" }],
  creator: "SVM IT SOLUTIONS",
  publisher: "SVM IT SOLUTIONS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://svmitsolutions.com",
    title: "SVM IT SOLUTIONS - Leading Web Development & SEO Company",
    description:
      "Transform your digital presence with our expert web development, mobile app development, SEO optimization, and digital marketing services.",
    siteName: "SVM IT SOLUTIONS",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVM IT SOLUTIONS - Leading Web Development & SEO Company",
    description:
      "Transform your digital presence with our expert web development, mobile app development, SEO optimization, and digital marketing services.",
    creator: "@svmitsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'Next.js',
     icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  applicationName: "SVM IT SOLUTIONS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
