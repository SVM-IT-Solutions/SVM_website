import WebDevelopmentPage from "@/components/webdevelopment";
import Script from "next/script";

// ✅ SEO metadata (works on server)
export const metadata = {
  title: "Expert Freelance Website Developers in Mumbai, Delhi, India | Svmitsolution",
  description:
    "Hire expert freelance website developers & web designers in Mumbai, India. Get fast, SEO-friendly, mobile-ready websites that convert visitors into leads.",
  keywords: [
    "Freelance Website Developers in Mumbai",
    "Freelance Web Designers in Mumbai India",
    "Hire Web Developer in Delhi",
  ],
  authors: [{ name: "svm it solution", url: "https://www.svmitsolution.com/webdevelopment" }],

  // ✅ Canonical Tag
  alternates: {
    canonical: "https://www.svmitsolution.com/webdevelopment",
  },


  openGraph: {
    title: "Freelance Web Developers & Designers in Mumbai, India | Svmitsolution",
    description:
      "Hire expert freelance website developers & web designers in Mumbai, India. Get fast, SEO-friendly, mobile-ready websites that generate quality leads.",
    url: "https://www.svmitsolution.com/webdevelopment",
    images: [
      {
        url: "https://www.svmitsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SVM IT Solution",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire Freelance Web Developers & Designers in Mumbai | Svmitsolution",
    description:
      "Looking for reliable freelance web developers & designers in Mumbai, India? Get high-performance websites that convert visitors into leads.",
    images: ["https://www.svmitsolution.com/logo.png"],
  },
};

export default function Page() {
  return (
    <>
      {/* ✅ Schema Markup */}
      <Script
        id="svm-web-development-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "SVM IT Solution",
            jobTitle: "Freelance Web Developers & Web Designers in Mumbai, India",
            url: "https://www.svmitsolution.com/webdevelopment",
            image: "https://www.svmitsolution.com/logo.png",
            description:
              "Expert freelance website developers and web designers in Mumbai, India offering fast, SEO-friendly, and high-converting websites.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "MH",
              addressCountry: "IN",
            },
            areaServed: {
              "@type": "Place",
              name: "Mumbai, Delhi, India",
            },
            sameAs: [
              "https://www.instagram.com/svmitsolution/",
              "https://www.linkedin.com/in/svm-it-solution/",
              "https://x.com/svmitsolution",
            ],
          }),
        }}
      />

      {/* Page Content */}
      <WebDevelopmentPage />
    </>
  );
}
