import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Box, Flex } from '../components/box'
import { Profile } from '../components/profile'
import { Heading, TitleLink, Date, Caption, BodyText } from '../components/text'
import { Tag } from '../components/tag'
import { ReadMoreButton } from '../components/button'
import { Skills, Rewards, Blogs, About, Resume } from '../components/sections'

const components = {
  Box,
  Flex,
  Profile,
  Heading,
  TitleLink,
  Date,
  Tag,
  Caption,
  BodyText,
  ReadMoreButton,
  Skills,
  Rewards,
  Blogs,
  About,
  Resume
}

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MDXProvider>
  )
}
