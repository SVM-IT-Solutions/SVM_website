/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 this enables static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // required when exporting static site with <Image>
  },
};

export default nextConfig;
