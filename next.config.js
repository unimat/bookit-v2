/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://bookit-v2.vercel.app",
    NEXTAUTH_URL: "https://bookit-v2.vercel.app",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-v2",
    DB_URI: 
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
