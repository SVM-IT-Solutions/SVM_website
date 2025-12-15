import UIUXDesignPage from "@/components/uxuidesign";

// ✅ SEO metadata (works on server)
export const metadata = {
  title: "Best Freelance UI/UX Designer in Delhi, Noida & Varanasi | Svmitsolution",
  description:
    "Hire the top freelance UI/UX designer in Delhi, Noida, and Varanasi. Create stunning, user-friendly interfaces that boost engagement and conversions. Get a free consultation today!",
  keywords: [
    "Freelance UI UX Designer Delhi",
    "Freelance UI UX Designer Noida",
    "Freelance UI UX Designer Varanasi",
    "Best UI UX Designer India",
  ],
  authors: [{ name: "SVM IT Solution", url: "https://svmitsolution.com" }],

  // ✅ Canonical Tag
  alternates: {
    canonical: "https://svmitsolution.com/uxuidesign",
  },

  // ✅ Google Search Console Verification
  other: {
    "google-site-verification": "IRrlp0CHw9VeX4Hm-gEgs19Ho75fSJaT4L4Cu4dGM0U",
  },

  // ✅ Open Graph
  openGraph: {
    title: "Best Freelance UI/UX Designer in Delhi, Noida & Varanasi | Svmitsolution",
    description:
      "Hire the top freelance UI/UX designer in Delhi, Noida, and Varanasi. Stunning, user-friendly interfaces to boost engagement & conversions.",
    url: "https://svmitsolution.com/uxuidesign",
    images: [
      {
        url: "https://svmitsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SVM IT Solution",
      },
    ],
    siteName: "SVM IT Solution",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Best Freelance UI/UX Designer in Delhi, Noida & Varanasi | Svmitsolution",
    description:
      "Hire the top freelance UI/UX designer in Delhi, Noida, and Varanasi. Stunning, user-friendly interfaces to boost engagement & conversions.",
    images: ["https://svmitsolution.com/logo.png"],
    site: "@svmitsolution",
    creator: "@svmitsolution",
  },

  // ✅ JSON-LD Schema Markup
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "SVM IT Solution",
      "url": "https://svmitsolution.com/uxuidesign",
      "logo": "https://svmitsolution.com/logo.png",
      "sameAs": [
        "https://www.instagram.com/svmitsolution/",
        "https://www.linkedin.com/in/svm-it-solution/",
        "https://x.com/svmitsolution"
      ],
      "description": "Top freelance UI/UX designer in Delhi, Noida, and Varanasi. Professional UI/UX services to boost engagement and conversions."
    }
  ]
};

export default function Page() {
  return <UIUXDesignPage />;
}
