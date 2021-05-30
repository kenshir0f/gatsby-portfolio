import React from 'react'
import { Box } from './components/box'
import { Footer } from './components/footer'
import { GlobalStyle } from './utils/globalStyle'

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Box margin={'0 auto'} px={16} maxWidth={['100%', '720px']}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
