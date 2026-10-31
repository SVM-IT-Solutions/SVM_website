// seo.config.js
export const defaultSeoConfig = {
  title: "svmitsolutions",
  titleTemplate: "%s | development",
  defaultTitle: "svmitsolutions",
  description: "Default description of your website",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "svmitsolutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "svmitsolutions",
      },
    ],
  },
  twitter: {
    handle: "@yourhandle",
    site: "@yourhandle",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "default, keywords, here",
    },
  ],
};
