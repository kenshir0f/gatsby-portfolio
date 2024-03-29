import styled from 'styled-components'
import React, { HTMLAttributes } from 'react'
import { colors } from '../../utils/colors'
import { theme } from '../../utils/theme'
import { COMMON, COMMON_PROPS } from '../../utils/constants'

interface CaptionProps {
  text: string
}

type Props = CaptionProps & COMMON_PROPS & HTMLAttributes<HTMLSpanElement>

export const Caption: React.FC<Props> = ({ text, ...props }) => {
  const { sm } = theme.fontSizes

  return (
    <CaptionBase fontSize={sm} {...props}>
      {text}
    </CaptionBase>
  )
}

const CaptionBase = styled.p<COMMON_PROPS>`
  margin: 0;
  color: ${colors.black[500]};
  line-height: 140%;
  ${COMMON}
`
