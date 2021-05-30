import styled from 'styled-components'
import React from 'react'
import { colors } from '../../utils/colors'
import { theme } from '../../utils/theme'
import { COMMON, COMMON_PROPS } from '../../utils/constants'

export const Caption: React.FC = ({ children }) => {
  const { sm } = theme.fontSizes

  return (
    <CaptionBase fontSize={sm} mb={[1]}>
      {children}
    </CaptionBase>
  )
}

export const CaptionBase = styled.p<COMMON_PROPS>`
  margin: 0;
  color: ${colors.black[500]};
  line-height: 125%;
  ${COMMON}
`
