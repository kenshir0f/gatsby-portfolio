import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Box, Flex } from '../components/box'
import { Profile } from '../components/profile'
import { Heading, TitleLink, Date, Caption } from '../components/text'
import { Tag } from '../components/tag'

const components = {
  Box,
  Flex,
  Profile,
  Heading,
  TitleLink,
  Date,
  Tag,
  Caption,
}

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MDXProvider>
  )
}
