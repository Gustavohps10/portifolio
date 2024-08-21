/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './build', // Changes the build output directory to `./dist`.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
