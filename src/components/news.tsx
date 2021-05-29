import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/colors'
import { space, color, typography } from 'styled-system'
import { Box } from './box'
import theme from '../utils/theme'

const Time = styled.time`
  ${typography}
  ${space}
  font-weight: 400;
  color: ${colors.black[300]};
  display: block;
  letter-spacing: 0.02em;
`

Time.defaultProps = { theme }

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

export const News: React.FC<Props> = ({ date, en, children }) => {
  return (
    <Box mt={[36, 28, 36]}>
      <Time fontSize={[0, 1, 2, 3]} mb={['8px', '12px']}>
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
