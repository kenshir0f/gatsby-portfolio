import styled from 'styled-components'
import React from 'react'
import { Icon, IconType } from '../icons'
import { colors } from '../../utils/colors'
import { Flex } from '../box'
import { COMMON, COMMON_PROPS } from '../../utils/constants'

interface HeadingProps {
  icon: IconType
}

export const Heading: React.FC<HeadingProps> = ({ icon, children }) => {
  return (
    <Flex alignItems="center" mt={"64px"} mb={[4]}>
      <Icon type={icon} color={colors.blue} />
      <H2 ml={2}>{children}</H2>
    </Flex>
  )
}

const H2 = styled.h2<COMMON_PROPS>`
  color: ${colors.blue};
  margin: 0;
  line-height: 125%;
  ${COMMON}
`
