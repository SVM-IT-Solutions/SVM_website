import MobileDevelopmentPage from "@/components/appdevelopment";

// ✅ SEO metadata (works on server)
export const metadata = {
  title: "Freelance Mobile App Developer in Delhi, Noida & Gurgaon | Svmitsolution",
  description:
    "Hire a freelance mobile app developer in Delhi NCR for Android & iOS apps. Fast, secure, scalable apps with UI/UX focus. Get a free consultation today.",
  keywords: [
    "Freelance Mobile App Developer Delhi",
    "Android iOS App Developer Delhi NCR",
    "Freelance App Developer India",
    "Hire Mobile App Developer",
  ],
  authors: [{ name: "SVM IT Solution", url: "https://svmitsolution.com/appdevelopment" }],
  alternates: {
    canonical: "https://svmitsolution.com/appdevelopment",
  },

  openGraph: {
    title: "Freelance Mobile App Developer in Delhi, Noida & Gurgaon | Svmitsolution",
    description:
      "Hire a freelance mobile app developer in Delhi NCR for Android & iOS apps. Fast, secure, scalable apps with UI/UX focus. Get a free consultation today.",
    url: "https://svmitsolution.com/appdevelopment",
    siteName: "Svmitsolution",
    images: [
      {
        url: "https://svmitsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SVM IT Solution - Freelance Mobile App Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Freelance Mobile App Developer in Delhi NCR | Svmitsolution",
    description:
      "Looking for a reliable freelance mobile app developer in Delhi, Noida, Gurgaon or Faridabad? Get high-performance Android & iOS apps.",
    images: ["https://svmitsolution.com/logo.png"],
  },
};

// ✅ JSON-LD Schema markup for structured data
const schemaMarkup = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://svmitsolution.com/#person",
        "name": "Freelance Mobile App Developer",
        "url": "https://svmitsolution.com/",
        "jobTitle": "Freelance Mobile App Developer",
        "description": "Expert freelance mobile app developer providing Android and iOS app development services in Delhi NCR.",
        "sameAs": [
          "https://www.linkedin.com/in/yourprofile",
          "https://twitter.com/yourprofile"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://svmitsolution.com/appdevelopment/#service",
        "serviceType": "Mobile App Development",
        "name": "Freelance Mobile App Development Services in Delhi NCR",
        "description": "Professional freelance mobile app development services in Delhi, Noida, Gurgaon and Faridabad. Android & iOS apps with scalable architecture and UI/UX focus.",
        "provider": {
          "@id": "https://svmitsolution.com/#person"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Delhi NCR"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Delhi, Noida, Gurgaon, Faridabad"
          }
        },
        "offers": {
          "@type": "Offer",
          "url": "https://svmitsolution.com/appdevelopment",
          "priceCurrency": "INR",
          "price": "0",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "Contact for pricing"
          },
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  }),
};

export default function Page() {
  return (
    <>
      <MobileDevelopmentPage />
      {/* JSON-LD Schema Script */}
      <script type="application/ld+json" dangerouslySetInnerHTML={schemaMarkup} />
    </>
  );
}
