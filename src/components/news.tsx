import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/colors'
import { space, color, layout, typography } from 'styled-system'

const Base = styled('div')`
  color: ${colors.black};
  .en {
    color: ${colors.gray};
  }
`

const Time = styled.time`
  ${typography}
  font-weight: 600;
  color: ${colors.black};
  display: block;
`

interface Props {
  date: string
  en: string
}

export const News: React.FC<Props> = ({ date, en, children }) => {
  return (
    <Base>
      <Time fontSize={['16px', 1, 2, 3]}>{date}</Time>
      {children}
      <p className={'en'}>{en}</p>
    </Base>
  )
}
