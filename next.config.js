/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (GitHub Pages)
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/hikeroo-landing',
  } : {})
}

module.exports = nextConfig 