import React from 'react'
import { GlobalStyle } from './utils/globalStyle'

function Layout({ children }) {

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
