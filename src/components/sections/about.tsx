import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps, COMMON, COMMON_PROPS } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Box } from '../box'
import { Heading } from '../text'

export const About: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="user" mb={3} text="About" />
      <BodyText lineHeight={['160%', '180%']}>
        cookpad.com のリファクタリング、デザインライブラリの更新cookpad.com
        のリファクタリング、デザインライブラリの更新cookpad.com
        のリファクタリング、デザインライブラリの更リング、デザインライブラリの更新
        cookpad.comリング、デザインライブラリの更新cookpad.com
      </BodyText>
    </Box>
  )
}

const BodyText = styled.p<COMMON_PROPS>`
  margin: 0;
  color: ${colors.black[600]};
  font-size: ${theme.fontSizes.md} ${COMMON};
`
