/** @type {import('next').NextConfig} */
module.exports = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "./styles/design/index.scss";',
  },
  images: {
    domains: ['backend.presto.com', '', 'localhost'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

}
