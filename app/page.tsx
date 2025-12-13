import HomePage from "../components/home";
import Script from "next/script";

// ✅ SEO metadata (works on server)
export const metadata = {
  title:
    "No.1 Freelance SEO Specialist in India | Professional SEO Expert in India | Svmitsolution",
  description:
    "Hire the No.1 Freelance SEO Specialist in India for professional, result-driven SEO. Boost rankings, traffic, and organic growth with a trusted SEO expert.",
  keywords: [
    "No.1 Freelance SEO Specialist in India",
    "Freelance SEO Specialist in India",
    "Professional SEO Expert India",
    "Best SEO Freelancer India",
  ],
  authors: [{ name: "svm it solution", url: "https://svmitsolution.com" }],

  alternates: {
    canonical: "https://svmitsolution.com/",
  },

  other: {
    "google-site-verification":
      "IRrlp0CHw9VeX4Hm-gEgs19Ho75fSJaT4L4Cu4dGM0U",
  },

  openGraph: {
    title:
      "No.1 Freelance SEO Specialist in India | Professional SEO Expert in India | Svmitsolution",
    description:
      "Hire the No.1 Freelance SEO Specialist in India for professional, result-driven SEO.",
    url: "https://svmitsolution.com/",
    images: [
      {
        url: "https://svmitsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SVM IT Solution",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "No.1 Freelance SEO Specialist in India | Professional SEO Expert in India | Svmitsolution",
    description:
      "Hire the No.1 Freelance SEO Specialist in India for professional, result-driven SEO.",
    images: ["https://svmitsolution.com/logo.png"],
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "SVM IT Solution",
    jobTitle: "Freelance SEO Specialist In India",
    url: "https://svmitsolution.com/",
    image: "https://svmitsolution.com/logo.png",
    description:
      "No.1 Freelance SEO Specialist in India offering professional, result-driven SEO services.",
    sameAs: [
      "https://www.instagram.com/svmitsolution/",
      "https://www.linkedin.com/in/svm-it-solution/",
      "https://x.com/svmitsolution",
    ],
  };

  return (
    <>
      {/* ✅ Google Analytics (GA4) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J49SNCGXMF"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J49SNCGXMF');
        `}
      </Script>

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
