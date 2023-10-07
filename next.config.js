/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "www.gravatar.com",
      "static.ghost.org",
      "localhost",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
