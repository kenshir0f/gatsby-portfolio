import { HTMLAttributes } from 'react'
import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  shadow,
  ShadowProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
} from 'styled-system'

export const COMMON = compose(
  space,
  color,
  layout,
  typography,
  position,
  flexbox,
  grid,
  shadow,
  border,
  background
)
export type COMMON_PROPS = SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  PositionProps &
  FlexboxProps &
  GridProps &
  ShadowProps &
  BorderProps &
  BackgroundProps

export type BaseProps = COMMON_PROPS & HTMLAttributes<HTMLElement>
