const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'kenshir0f.com',
    shortName: 'kenshir0f',
    description: 'Portfolio of kenshir0f',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/layout.tsx'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans JP', 'Lato:300,400,700'],
        },
      },
    },
  ],
}
