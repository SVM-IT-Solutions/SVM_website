import HomePage from "../components/home";
// ✅ SEO metadata (works on server)
export const metadata = {
  title: "No.1 Freelance SEO Specialist in India | Professional SEO Expert in India | Svmitsolution",
  description:
    "Hire the No.1 Freelance SEO Specialist in India for professional, result-driven SEO. Boost rankings, traffic, and organic growth with a trusted SEO expert.",
  keywords: [
    "No.1 Freelance SEO Specialist in India",
    "Freelance SEO Specialist in India",
    "Professional SEO Expert India",
    "Best SEO Freelancer India",
  ],
  authors: [{ name: "svm it solution", url: "" }],
  openGraph: {
    title: "No.1 Freelance SEO Specialist in India | Professional SEO Expert in India | Svmitsolution",
    description:
      "Hire the No.1 Freelance SEO Specialist in India for professional, result-driven SEO. Boost rankings, traffic, and organic growth with a trusted SEO expert.",
    url: "",
    images: [
      {
        url: "https://svmitsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SVM It Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No.1 Freelance SEO Specialist in India | Professional SEO Expert in India | Svmitsolution",
    description:
      "Hire the No.1 Freelance SEO Specialist in India for professional, result-driven SEO. Boost rankings, traffic, and organic growth with a trusted SEO expert.",
    images: ["https://svmitsolution.com/logo.png"],
  },
};

export default function Page() {
  return <HomePage />;
}