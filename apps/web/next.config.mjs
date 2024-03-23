/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    transpilePackages: ['interprocess'],
  },

  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  rewrites() {
    return [
      {
        source: '/docs/:path',
        destination: '/docs/:path/index',
      },
      {
        source: '/docs/:path*',
        destination: '/docs/:path*',
      },
    ]
  },

  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started/overview',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
