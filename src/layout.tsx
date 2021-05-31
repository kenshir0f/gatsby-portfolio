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
          { name: 'kenshir0f', content: 'This page is kenshir0f portfolio ' },
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
