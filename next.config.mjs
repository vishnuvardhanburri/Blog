const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  basePath: isProd ? '/vishnu-portfolio' : '',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  assetPrefix: isProd ? '/vishnu-portfolio' : '',
  trailingSlash: true,
}

export default nextConfig
