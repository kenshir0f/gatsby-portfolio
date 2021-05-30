import React from 'react'
import { BaseProps } from '../../utils/constants'
import { Box, Flex } from '../box'
import { Tag } from '../tag'
import { Heading } from '../text'

const SKILLS = [
  'TypeScript',
  'React',
  'UI Design',
  'Figma',
  'Next.js',
  'Gatsby',
  'Firebase',
  'Jest',
  'a11y',
  'Ruby on Rails',
  'HTML/CSS',
]

export const Skills: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="heart" mb={[3, 4]} text="Skills" />
      <Flex m="-12px -12px 60px 0" flexWrap="wrap">
        {SKILLS.map((skill) => {
          return <Tag name={skill} key={skill} />
        })}
      </Flex>
    </Box>
  )
}
