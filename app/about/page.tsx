import AboutPage from "../../components/about";

// ⭐ FIXED → Use ONLY generateMetadata (No metadata export)
export async function generateMetadata() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahesh Kumar",
    "alternateName": "Freelance SEO Specialist in India",
    "jobTitle": "SEO Specialist & Web Developer",
    "description":
      "Mahesh Kumar is a Freelance SEO Specialist in India helping businesses grow with advanced SEO strategies and high-performing website development.",
    "url": "https://www.svmitsolution.com/about",
    "image": "https://www.svmitsolution.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/in/svm-it-solution/",
      "https://www.instagram.com/svmitsolution/",
      "https://x.com/svmitsolution"
    ],
    "knowsAbout": [
      "SEO",
      "Technical SEO",
      "On-page SEO",
      "Website Development",
      "JavaScript",
      "WordPress Development",
      "React",
      "Digital Marketing"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "SVM IT Solution",
      "url": "https://www.svmitsolution.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO & Website Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description":
              "Freelance SEO services including on-page SEO, technical SEO, content optimization, and ranking improvement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description":
              "Responsive and high-performance website development services for businesses and startups."
          }
        }
      ]
    }
  };

  return {
    title:
      "Freelance SEO Specialist & Website Development in India | svmitsolution",
    description:
      "Freelance SEO Specialist & Website Development in India delivering smart SEO strategies, fast websites, and better online growth for businesses.",

    keywords: [
      "Freelance SEO services in India",
      "SEO specialist for small businesses",
      "Professional SEO expert in India",
      "Website SEO and development services",
      "Freelance SEO Specialist in India"
    ],

    openGraph: {
      title:
        "Freelance SEO Specialist & Website Development in India | svmitsolution",
      description:
        "Freelance SEO Specialist & Website Development in India delivering smart SEO strategies, fast websites, and better online growth for businesses.",
      url: "https://www.svmitsolution.com/about",
      images: [
        {
          url: "https://www.svmitsolution.com/logo.png",
          width: 1200,
          height: 630,
          alt: "svm it solution"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Freelance SEO Specialist & Website Development in India | svmitsolution",
      description:
        "Freelance SEO Specialist & Website Development in India delivering smart SEO strategies, fast websites, and better online growth for businesses.",
      images: ["https://www.svmitsolution.com/logo.png"]
    },

    other: {
      "script:ld+json": JSON.stringify(schemaData)
    }
  };
}

export default function Page() {
  return <AboutPage />;
}
