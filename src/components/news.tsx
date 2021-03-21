import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/colors'
import { space, color, layout, typography } from 'styled-system'
import { Box } from './box'

const Time = styled.time`
  ${typography}
  ${space}
  font-weight: 400;
  color: ${colors.black[300]};
  display: block;
  letter-spacing: 0.02em;
`

const P = styled.p`
  ${typography}
  ${color}
  ${space}
  letter-spacing: 0.02em;
`

interface Props {
  date: string
  en: string
}

// ~639px, ~831px, ~1023px, 1024px~
// mobile, tablet, desktop, hd
// 1: 4px, 2: 8px, 3: 16px, 4: 32px

export const News: React.FC<Props> = ({ date, en, children }) => {
  return (
    <Box mt={[36, 28, 36]}>
      <Time fontSize={[13, 15, 17, 19]} mb={['8px', '12px']}>
        {date}
      </Time>
      <P
        fontSize={[14, 17, 19, 21]}
        lineHeight={['24px', '28px', '32px']}
        mb={['4px', '4px', '12px']}
      >
        {children}
      </P>
      <P
        color={colors.black[300]}
        fontSize={[13, 15, 17, 19]}
        lineHeight={['20px']}
        fontWeight={400}
        mb={0}
      >
        {en}
      </P>
    </Box>
  )
}
