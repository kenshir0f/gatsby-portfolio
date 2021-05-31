import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from './components/box'
import { Footer } from './components/footer'
import { GlobalStyle } from './utils/globalStyle'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'ja' }}
        title="kenshir0f portfolio"
        meta={[
          { property: 'og:title', content: 'kenshir0f portfolio' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://kenshir0f.com' },
          {
            property: 'og:image',
            content: 'https://kenshir0f.com/static/images/profile.jpg',
          },
          { property: 'og:site_name', content: 'kenshir0f portfolio' },
          { property: 'og:description', content: 'kenshir0f portfolio site' },
          { property: 'twitter:card', content: 'summary' },
          { property: 'twitter:site', content: '@kenshir0f' },
          { property: 'twitter:player', content: '@kenshir0f' },
        ]}
      />
      <GlobalStyle />
      <Box margin={'0 auto'} px={16} maxWidth={['100%', '720px']}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

// gatsby-config で読み込む
// eslint-disable-next-line import/no-default-export
export default Layout
