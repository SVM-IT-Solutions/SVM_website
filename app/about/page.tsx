import AboutPage from "../../components/about";
// ✅ SEO metadata (works on server)
export const metadata = {
  title: "Home | ravi Patel | Full Stack Developer",
  description:
    "Welcome to Vishal Patel' portfolio — a full stack developer specializing in React, Node.js, and Next.js. I create fast, scalable, and user-friendly web applications that help businesses grow online.",
  keywords: [
    "Vishal Patel",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Development",
  ],
  authors: [{ name: "Vishal Patel", url: "https://www.vishalpatek.com" }],
  openGraph: {
    title: "Vishal Patel | Full Stack Developer",
    description:
      "Explore modern web projects built by Vishal Patel using React, Node.js, and Next.js.",
    url: "https://www.vishalpatek.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal Patel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Patel | Full Stack Developer",
    description:
      "Explore modern web projects built by Vishal Patel using React, Node.js, and Next.js.",
    images: ["/images/twitter-card.jpg"],
  },
};

export default function Page() {
  return <AboutPage />;
}