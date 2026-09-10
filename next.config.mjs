/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow the local network IP to access Next.js dev resources
  // This is needed for the button (and React) to work on mobile / other devices
  allowedDevOrigins: ['192.168.0.208'],
}

export default nextConfig
