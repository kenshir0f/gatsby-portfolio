import styled from 'styled-components'
import { space, SpaceProps, color, layout, typography, flexbox, ColorProps, LayoutProps } from 'styled-system'
import theme from '../utils/theme'

type Props = SpaceProps & ColorProps & LayoutProps & LayoutProps

export const Box = styled.div<Props>`
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
