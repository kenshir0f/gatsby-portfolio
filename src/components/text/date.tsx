import styled from 'styled-components'
import React from 'react'
import { colors } from '../../utils/colors'
import { theme } from '../../utils/theme'
import { COMMON, COMMON_PROPS } from '../../utils/constants'

export const Date: React.FC = ({ children }) => {
  const { sm, md } = theme.fontSizes

  return (
    <DateBase fontSize={[sm, md]} mb={["20px"]}>
      {children}
    </DateBase>
  )
}

const DateBase = styled.span<COMMON_PROPS>`
  display: inline-block;
  color: ${colors.black[500]};
  line-height: 125%;
  ${COMMON}
`
