/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "www.gravatar.com",
      "static.ghost.org",
      "localhost",
      "digitalpress.fra1.cdn.digitaloceanspaces.com",
      "images.unsplash.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
