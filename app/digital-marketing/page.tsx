import DigitalMarketingPage from "@/components/digital-marketing";

// ✅ SEO metadata (works on server)
export const metadata = {
  title: "Best Digital Marketing Freelancer in India | Svmitsolution",
  description:
    "Hire the best digital marketing freelancer in India to grow your business. Expert in SEO, social media, PPC & content marketing for fast, measurable results.",
  keywords: [
    "Digital Marketing Freelancer Hyderabad",
    "Best SEO Freelancer Hyderabad",
    "Freelance Digital Marketer Hyderabad",
    "Top Marketing Expert Hyderabad",
  ],
  authors: [{ name: "svm it solution", url: "https://www.svmitsolution.com" }],

  // ✅ Canonical Tag
  alternates: {
    canonical: "https://www.svmitsolution.com/digital-marketing",
  },

  openGraph: {
    title: "Top Digital Marketing Freelancer in India | Svmitsolution",
    description:
      "Hire the best digital marketing freelancer in Hyderabad for SEO, social media, PPC & content marketing to grow your business fast.",
    url: "https://www.svmitsolution.com/digital-marketing",
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
    title: "Top Digital Marketing Freelancer in Hyderabad | Svmitsolution",
    description:
      "Hire the best digital marketing freelancer in Hyderabad for SEO, social media, PPC & content marketing to grow your business fast.",
    images: ["https://www.svmitsolution.com/logo.png"],
  },

  // ✅ Social Profiles
  icons: {
    instagram: "https://www.instagram.com/svmitsolution/",
    linkedin: "https://www.linkedin.com/in/svm-it-solution/",
    x: "https://x.com/svmitsolution",
  },

  // ✅ JSON-LD Schema Markup
  metadataBase: new URL("https://www.svmitsolution.com/"),
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SVM It Solution",
    url: "https://www.svmitsolution.com/digital-marketing",
    logo: "https://www.svmitsolution.com/logo.png",
    sameAs: [
      "https://www.instagram.com/svmitsolution/",
      "https://www.linkedin.com/in/svm-it-solution/",
      "https://x.com/svmitsolution",
    ],
    description:
      "Hire the best digital marketing freelancer in Hyderabad. Expert in SEO, social media, PPC & content marketing for measurable growth.",
  },
};

export default function Page() {
  return <DigitalMarketingPage />;
}
