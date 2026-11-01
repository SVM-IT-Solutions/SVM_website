import HomePage from "../components/home";
import Script from "next/script";

// ✅ SEO metadata (works on server)
export const metadata = {
  title: "Freelance SEO Expert India | Hire Best Specialist Services",
  description:
    "Get Best Expert freelance SEO services in India to boost organic rankings, web traffic & business leads. Hire our expert specialist for advanced AEO, GEO optimization.",
  keywords: [
    "No.1 Freelance SEO Specialist in India",
    "Freelance SEO Specialist in India",
    "Professional SEO Expert India",
    "Best SEO Freelancer India",
  ],
  authors: [{ name: "svm it solution", url: "https://www.svmitsolution.com" }],

  // ✅ Canonical Tag
  alternates: {
    canonical: "https://www.svmitsolution.com/",
  },

  // ✅ Google Search Console Verification
  other: {
    "google-site-verification": "IRrlp0CHw9VeX4Hm-gEgs19Ho75fSJaT4L4Cu4dGM0U",
  },

  openGraph: {
    title: "Freelance SEO Expert India | Hire Best Specialist Services",
    description:
      "Get Best Expert freelance SEO services in India to boost organic rankings, web traffic & business leads. Hire our expert specialist for advanced AEO, GEO optimization.",
    url: "https://www.svmitsolution.com/",
    images: [
      {
        url: "https://www.svmitsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SVM It Solution",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Freelance SEO Expert India | Hire Best Specialist Services | Svmitsolution",
    description:
      "Get Best Expert freelance SEO services in India to boost organic rankings, web traffic & business leads. Hire our expert specialist for advanced AEO, GEO optimization.",
    images: ["https://www.svmitsolution.com/logo.png"],
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "SVM IT Solution",
    jobTitle: "Freelance SEO Expert India | Hire Best Specialist Services",
    url: "https://www.svmitsolution.com/",
    image: "https://www.svmitsolution.com/logo.png",
    description:
      "Get Best Expert freelance SEO services in India to boost organic rankings, web traffic & business leads. Hire our expert specialist for advanced AEO, GEO optimization.",
    sameAs: [
      "https://www.instagram.com/svmitsolution/",
      "https://www.linkedin.com/in/svm-it-solution/",
      "https://x.com/svmitsolution",
    ],
  };

  return (
    <>
      <HomePage />

      {/* ✅ JSON-LD Schema Markup */}
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
