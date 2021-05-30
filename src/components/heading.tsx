import styled from 'styled-components'
import React from 'react'
import { Icon, IconType } from './icons'
import { colors } from '../utils/colors'
import { Flex } from './box'
import { space, SpaceProps } from 'styled-system'
interface Props {
  icon: IconType
}

export const Heading: React.FC<Props> = ({ icon, children }) => {
  return (
    <Flex alignItems="center" mb={[4]}>
      <Icon type={icon} color={colors.blue} />
      <H2 ml={2}>{children}</H2>
    </Flex>
  )
}

const H2 = styled.h2<SpaceProps>`
  color: ${colors.blue};
  margin: 0;
  line-height: 125%;
  ${space}
`
