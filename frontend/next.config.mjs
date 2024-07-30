/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL || 'https://renderpythonnextjs-backend.onrender.com',
  },
};

export default nextConfig;