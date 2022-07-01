/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */})
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  useFileSystemPublicRoutes: false,
};
module.exports = {
  trailingSlash: true,
}
