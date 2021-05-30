import styled from 'styled-components'
import {
  space,
  SpaceProps,
  color,
  layout,
  typography,
  flexbox,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  border,
  BorderProps,
} from 'styled-system'
import { theme } from '../utils/theme'

type Props = SpaceProps & ColorProps & LayoutProps & LayoutProps & BorderProps

export const Box = styled.div<Props>`
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${border}
`

Box.defaultProps = { theme }

export const Flex = styled(Box)<Props & FlexboxProps>`
  display: flex;
  ${flexbox}
`
