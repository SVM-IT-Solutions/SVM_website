/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 this enables static export
  images: {
    unoptimized: true, // required when exporting static site with <Image>
  },
};

export default nextConfig;
