const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'kenshir0f.com',
    shortName: 'kenshir0f',
    description: 'Portfolio of kenshir0f',
  },
  plugins: [
    // 静的画像の読み込み
    'gatsby-plugin-image',
    // `gatsby-plugin-image`に必要なプラグイン
    'gatsby-plugin-sharp',
    // ページ遷移ごとの再読み込みを防ぐ
    'gatsby-plugin-catch-links',
    // metaタグの追加
    'gatsby-plugin-react-helmet',
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
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Nunito Sans',
            weights: ['400', '600', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png'
      }
    }
  ],
}
