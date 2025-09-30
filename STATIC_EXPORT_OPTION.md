# Static Export Configuration (Alternative Option)
# Add this to next.config.js if you want static hosting instead of Node.js

/** @type {import('next').NextConfig} */
module.exports = {
  // ... existing config ...
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    // ... existing image config
  },
}

# Then run: npm run build
# Upload the 'out' folder to public_html