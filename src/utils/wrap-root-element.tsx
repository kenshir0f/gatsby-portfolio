import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import {
  Profile,
  About,
  Resume,
  Works,
  Blogs,
  Rewards,
  Skills,
  Enjoy,
} from '../components/sections'

const components = {
  Profile,
  About,
  Resume,
  Works,
  Blogs,
  Rewards,
  Skills,
  Enjoy,
}

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MDXProvider>
  )
}
