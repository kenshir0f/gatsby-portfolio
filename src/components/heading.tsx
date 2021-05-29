import styled from 'styled-components'
import React from 'react'
import { Icon } from '../icons'
import { colors } from '../utils/colors'
import { Box } from './box'

interface Props {
  icon: string
}

export const Heading: React.FC<Props> = ({ icon, children }) => {
  return (
    <Box>
      <Icon icon={icon} />
      <H2>{children}</H2>
    </Box>
  )
}

const H2 = styled.h2`
  color: ${colors.blue};
`
