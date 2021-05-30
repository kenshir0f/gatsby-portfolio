import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Profile } from '../components/profile'
import {
  Skills,
  Rewards,
  Blogs,
  About,
  Resume,
  Works,
} from '../components/sections'

const components = {
  Profile,
  About,
  Resume,
  Blogs,
  Rewards,
  Skills,
  Works,
}

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MDXProvider>
  )
}
