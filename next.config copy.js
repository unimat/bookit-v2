/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-v2",
    DB_URI: "mongodb://127.0.0.1:27017/bookit-v2",

    STRIPE_WEBHOOK_SECRET: "whsec_3259d62136e1e114490215c774bc13fee850888b02466eda365c3ed1452aa839",
    STRIPE_SECRET_KEY: "sk_test_51Nx482KItGEYC2ah7KgC5YYqRBISdpwuaJiwjabUwwuz5OOgYtRPXcybiFZj1xuUSUbeBeNb7UDSDlYrz6uqOPBD00YOil3FyH",

    CLOUDINARY_CLOUD_NAME: "dchyp1gj2",
    CLOUDINARY_API_KEY: "637941987615936",
    CLOUDINARY_API_SECRET: "CEgC_VciizD2vZDri5RiGHVHjkM",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: 2525,
    SMTP_USER: "3be6fbc82a8988",
    SMTP_PASSWORD: "d8cb40f383199e",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    SMTP_FROM_NAME: "BookIT",

    GEOCODER_API_KEY: "JVK6S8OIjG1eHkhkAO0tp2CAdifPhzAh",
    GEOCODER_PROVIDER: "mapquest",

    MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoidW5pbWF0a2Z0IiwiYSI6ImNsbzJvbXZscTB4eGkybHA3aHR2enBvNjAifQ.wt71CpoK9_qPmtrK5dkIVA",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "LGLGLVLGTZDTHJGHUÉIUZGUDZDJHJVBLJH",
    REVALIDATE_TOKEN: "IGHLUFGZFEHEBUIZGFLIFGLKUGLUG"
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
