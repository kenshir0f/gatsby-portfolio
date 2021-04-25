import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Box } from '../components/box'

const components = {
  Box,
}

function wrapRootElement({ element }) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MDXProvider>
  )
}

export default wrapRootElement
