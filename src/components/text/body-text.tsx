import styled from 'styled-components'
import React  from 'react'
import { colors } from '../../utils/colors'
import { theme } from '../../utils/theme'
import { COMMON, COMMON_PROPS } from '../../utils/constants'

export const BodyText: React.FC = ({ children }) => {
  const { md } = theme.fontSizes

  return (
    <BodyTextBase fontSize={[md]} >
      {children}
    </BodyTextBase>
  )
}

const BodyTextBase = styled.p<COMMON_PROPS>`
  margin: 0;
  color: ${colors.black[600]};
  line-height: 160%;
  ${COMMON}
`