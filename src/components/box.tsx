import styled from 'styled-components'
import { COMMON, COMMON_PROPS } from '../utils/constants'
import { theme } from '../utils/theme'

export const Box = styled.div<COMMON_PROPS>`
  ${COMMON}
`

Box.defaultProps = { theme }

export const Flex = styled(Box)<COMMON_PROPS>`
  display: flex;
  ${COMMON}
`

export const Grid = styled(Box)<COMMON_PROPS>`
  display: grid;
  ${COMMON}
`
