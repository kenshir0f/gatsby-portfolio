import styled from '@emotion/styled'
import { space, color, layout, typography, flexbox } from 'styled-system'
import theme from '../utils/theme'

export const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${typography}
`

Box.defaultProps = { theme }

export const Flex = styled.div`
  display: flex;
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${flexbox}
`
