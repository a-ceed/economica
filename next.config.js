/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains : ['localhost'],
    loader : "akamai",
    path: "",
  },
  basePath: "/economica",
  assetPrefix: "/economica",
}

module.exports = nextConfig
