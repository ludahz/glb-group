/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Silence workspace root inference warnings when multiple lockfiles exist
  outputFileTracingRoot: __dirname,
}
