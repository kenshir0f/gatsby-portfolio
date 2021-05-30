import React from 'react'
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

export const Skills: React.FC = () => {
  return (
    <Box>
      <Heading icon="heart" mb={[3, 4]}>Skills</Heading>
      <Flex m="-12px -12px 60px 0" flexWrap="wrap">
        {SKILLS.map((skill) => {
          return <Tag name={skill} />
        })}
      </Flex>
    </Box>
  )
}
