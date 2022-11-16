const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/interprocess' : '',
  assetPrefix: isProd ? '/interprocess/' : '',

  publicRuntimeConfig: {
    basePath: isProd ? '/interprocess' : '',
    assetPrefix: isProd ? '/interprocess/' : '',
  },

  experimental: {
    transpilePackages: ['interprocess'],
  },

  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

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
