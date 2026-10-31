// components/Seo.js
import { NextSeo } from "next-seo";
import { defaultSeoConfig } from "../seo.config";

const Seo = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  additionalMetaTags,
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        ...defaultSeoConfig.openGraph,
        ...openGraph,
        title: title || defaultSeoConfig.defaultTitle,
        description: description || defaultSeoConfig.description,
      }}
      twitter={{
        ...defaultSeoConfig.twitter,
        ...twitter,
      }}
      additionalMetaTags={[
        ...defaultSeoConfig.additionalMetaTags,
        ...(additionalMetaTags || []),
      ]}
    />
  );
};

export default Seo;