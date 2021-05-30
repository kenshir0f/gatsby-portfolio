import styled from 'styled-components'
import React from 'react'
import { colors } from '../../utils/colors'
import { theme } from '../../utils/theme'
import { COMMON, COMMON_PROPS } from '../../utils/constants'
import { Icon } from '../icons'
import { Box } from '../box'

interface TitleLinkProps {
  text: string
  href: string
  youtube?: boolean
}

export const TitleLink: React.FC<TitleLinkProps> = ({
  text,
  href,
  youtube,
}) => {
  const { md, lg } = theme.fontSizes

  return (
    <Box>
      <TitleLinkBase
        href={href}
        fontSize={[md, lg]}
        mb={[1, 2]}
        target="_blank"
        rel="noreferrer noopener"
      >
        {text}
      </TitleLinkBase>
      {youtube && (
        <a
          href="https://www.youtube.com/watch?v=X9JjTfeEJ5A"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon
            type="youtube"
            color={colors.black[900]}
            verticalAlign="text-bottom"
            ml={1}
          />
        </a>
      )}
    </Box>
  )
}

const TitleLinkBase = styled.a<COMMON_PROPS>`
  display: inline-block;
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
