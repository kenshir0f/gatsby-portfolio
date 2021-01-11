import React from 'react'
import { Box } from './components/box'
import { GlobalStyle } from './utils/globalStyle'

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Box
        margin={'0 auto'}
        px={16}
        maxWidth={['480px']}
      >
        {children}
      </Box>
    </>
  )
}

export default Layout
