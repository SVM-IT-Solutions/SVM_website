import EcommerceSolutionsPage from "@/components/ecommerce-solutions";
import Script from "next/script";

// ✅ SEO metadata (works on server)
export const metadata = {
  title: "Freelance eCommerce Website Developer in India | Svmitsolution",
  description:
    "Hire a freelance eCommerce website development specialist in India. Build fast, secure, mobile-friendly online stores that boost sales & UX.",
  keywords: [
    "Freelance eCommerce Website Developer in India",
    "eCommerce Website Development India",
    "Freelance Web Developer India",
    "Online Store Development India",
  ],
  authors: [{ name: "SVM IT Solution", url: "https://www.svmitsolution.com" }],

  alternates: {
    canonical: "https://www.svmitsolution.com/ecommerce-solutions",
  },

  openGraph: {
    title: "Freelance eCommerce Website Developer in India | Svmitsolution",
    description:
      "Hire a freelance eCommerce website development specialist in India. Build fast, secure, mobile-friendly online stores that boost sales & UX.",
    url: "https://www.svmitsolution.com/ecommerce-solutions",
    images: [
      {
        url: "https://www.svmitsolution.com/logo-og.png",
        width: 1200,
        height: 630,
        alt: "SVM IT Solution - eCommerce Website Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Freelance eCommerce Website Developer in India | Svmitsolution",
    description:
      "Hire a freelance eCommerce website development specialist in India. Build fast, secure, mobile-friendly online stores that boost sales & UX.",
    images: ["https://www.svmitsolution.com/logo-twitter.png"],
  },

  social: {
    instagram: "https://www.instagram.com/svmitsolution/",
    linkedin: "https://www.linkedin.com/in/svm-it-solution/",
    twitter: "https://x.com/svmitsolution",
  },
};

export default function Page() {
  return (
    <>
      <EcommerceSolutionsPage />

      {/* ✅ JSON-LD Structured Data */}
      <Script id="structured-data" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "SVM IT Solution",
              "url": "https://www.svmitsolution.com",
              "logo": "https://www.svmitsolution.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/svmitsolution/",
                "https://www.linkedin.com/in/svm-it-solution/",
                "https://x.com/svmitsolution"
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Freelance eCommerce Website Development",
              "provider": {
                "@type": "Organization",
                "name": "SVM IT Solution",
                "url": "https://www.svmitsolution.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "description": "Professional freelance eCommerce website development services in India. Build fast, secure, mobile-friendly online stores that boost sales & UX."
            },
            {
              "@type": "WebPage",
              "name": "Freelance eCommerce Website Developer in India",
              "url": "https://www.svmitsolution.com/ecommerce-solutions",
              "inLanguage": "en",
              "description": "Hire a freelance eCommerce website development specialist in India. Build fast, secure, mobile-friendly online stores that boost sales & UX."
            }
          ]
        }
        `}
      </Script>
    </>
  );
}
