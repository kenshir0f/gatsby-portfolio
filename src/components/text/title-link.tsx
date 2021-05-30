import styled from 'styled-components'
import React from 'react'
import { colors } from '../../utils/colors'
import { theme } from '../../utils/theme'
import { COMMON, COMMON_PROPS } from '../../utils/constants'
import { Icon } from '../icons'

interface TitleLinkProps {
  href: string
  youtube?: boolean
}

export const TitleLink: React.FC<TitleLinkProps> = ({
  children,
  href,
  youtube,
}) => {
  const { md, lg } = theme.fontSizes

  return (
    <TitleLinkBase href={href} fontSize={[md, lg]} mb={[1]}>
      {children}
      {youtube && (
        <a href="https://www.youtube.com/watch?v=X9JjTfeEJ5A" target="_blank">
          <Icon
            type="youtube"
            color={colors.black[900]}
            verticalAlign="text-bottom"
            ml={1}
          />
        </a>
      )}
    </TitleLinkBase>
  )
}

const TitleLinkBase = styled.a<COMMON_PROPS>`
  display: block;
  color: ${colors.black[900]};
  font-weight: 700;
  text-decoration: none;
  line-height: 125%;
  letter-spacing: 0.02rem;
  ${COMMON}

  :hover {
    text-decoration: underline;
  }
`