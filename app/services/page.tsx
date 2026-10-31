import ServicesPage from "@/components/services";

export const metadata = {
  title: "Digital Services by Mahesh Kumar | No.1 Freelance SEO Specialist in India",
  description:
    "Explore expert digital services by Mahesh Kumar (SVM IT Solution). We offer Web Development, App Development, and No.1 Freelance SEO services in India to boost your business growth.",
  keywords: [
    "No.1 Freelance SEO Specialist in India",
    "Freelance SEO Specialist in India",
    "Web Development Services India",
    "App Development Freelancer",
    "Professional SEO Expert India",
    "Mahesh Kumar SEO",
    "SVM IT Solution Services",
  ],
  authors: [
    { name: "Mahesh Kumar", url: "https://www.svmitsolution.com" },
    { name: "SVM IT Solution", url: "https://www.svmitsolution.com" }
  ],
  creator: "Mahesh Kumar",
  publisher: "SVM IT Solution",
  
  // ✅ Explicitly telling robots to index this page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: "https://www.svmitsolution.com/services",
  },

  openGraph: {
    type: "website",
    title: "Digital Services by Mahesh Kumar | No.1 Freelance SEO Specialist in India",
    description:
      "Hire Mahesh Kumar for top-tier Web Development, App Creation, and SEO Optimization. Trusted Freelance SEO Specialist delivering real results.",
    url: "https://www.svmitsolution.com/services",
    siteName: "SVM IT Solution",
    images: [
      {
        url: "https://www.svmitsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SVM IT Solution - Digital Services",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    site: "@svmitsolution", 
    creator: "@svmitsolution",
    title: "Digital Services by Mahesh Kumar | No.1 Freelance SEO Specialist",
    description:
      "Looking for the best digital services? Hire Mahesh Kumar, India's No.1 Freelance SEO Specialist for Web, App, and Marketing solutions.",
    images: ["https://www.svmitsolution.com/logo.png"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization/Service Schema
      {
        "@type": "ProfessionalService",
        "name": "SVM IT Solution",
        "image": "https://www.svmitsolution.com/logo.png",
        "url": "https://www.svmitsolution.com/services",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        // ✅ Added Area Served (India)
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "founder": {
          "@type": "Person",
          "name": "Mahesh Kumar",
          "jobTitle": "Freelance SEO Specialist & Developer",
          "url": "https://www.svmitsolution.com"
        },
        "sameAs": [
          "https://www.instagram.com/svmitsolution/",
          "https://www.linkedin.com/in/svm-it-solution/",
          "https://x.com/svmitsolution"
        ]
      },
      // 2. ✅ Added Breadcrumb Schema (Site Hierarchy)
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.svmitsolution.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.svmitsolution.com/services"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPage />
    </>
  );
}