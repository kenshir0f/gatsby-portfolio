import styled from 'styled-components'
import React, { HTMLAttributes } from 'react'
import { Icon, IconType } from '../icons'
import { colors } from '../../utils/colors'
import { Flex } from '../box'
import { COMMON, COMMON_PROPS } from '../../utils/constants'
interface HeadingProps {
  icon: IconType
}

type Props = HeadingProps & COMMON_PROPS & HTMLAttributes<HTMLParagraphElement>

export const Heading: React.FC<Props> = ({ icon, children, ...props }) => {
  return (
    <Flex alignItems="center" {...props}>
      <Icon type={icon} color={colors.blue} mt="-2px"/>
      <H2 ml={2}>{children}</H2>
    </Flex>
  )
}

const H2 = styled.h2<COMMON_PROPS>`
  color: ${colors.blue};
  margin: 0;
  line-height: 125%;
  letter-spacing: 0.02rem;
  ${COMMON}
`
