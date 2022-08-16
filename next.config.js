/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  }
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.graphcms.com',
      'assets.vercel.com',
      'picsum.photos',
      '192.168.0.123',
      'localhost'
    ]
    // formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withMDX(nextConfig)
