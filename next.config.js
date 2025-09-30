/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Silence workspace root inference warnings when multiple lockfiles exist
  outputFileTracingRoot: __dirname,
  
  // Production optimizations
  poweredByHeader: false,
  compress: true,
}
