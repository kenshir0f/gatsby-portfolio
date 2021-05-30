import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Flex } from '../box'
import { Icon } from '../icons'

export const Enjoy: React.FC<BaseProps> = ({...props}) => {
  return (
    <Flex justifyContent="center" {...props}>
      <Icon type="drink" color={colors.blue}/>
      <Text>Enjoy your day</Text>
      <Icon type="game" color={colors.blue}/>
    </Flex>
  )
}

const Text = styled.span`
  color: ${colors.blue};
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  margin: 0 8px;
`