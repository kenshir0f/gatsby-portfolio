import styled from 'styled-components'
import React from 'react'
import { colors } from '../utils/colors'
import { Flex } from './box'
import { COMMON, COMMON_PROPS } from '../utils/constants'
import { theme } from '../utils/theme'
import { StaticImage } from 'gatsby-plugin-image'

export const Profile: React.FC = () => {
  const twitterUrl = 'https://twitter.com/kenshir0f'
  const { sm, md, h2, h3 } = theme.fontSizes

  return (
    <Flex alignItems="center" flexDirection="column" mt={[40, 60]}>
      <Image />
      <Name fontSize={[h3, h2]} mt={[3, 4]}>
        Kenshiro Fujii
      </Name>
      <TwitterID href={twitterUrl} mt={[2, 3]} fontSize={[sm, md]}>
        @kenshir0f
      </TwitterID>
    </Flex>
  )
}

const Image: React.FC = () => {
  const src = '../images/profile.jpg'
  return (
    <StaticImage
      src={src}
      alt="プロフィール画像"
      width={160}
      height={160}
      style={{ borderRadius: '50%' }}
      placeholder="blurred"
      loading="eager"
    />
  )
}

const Name = styled.h1<COMMON_PROPS>`
  color: ${colors.black[900]};
  letter-spacing: 0.02rem;
  margin: 0;
  line-height: 125%;
  ${COMMON}
`

const TwitterID = styled.a<COMMON_PROPS>`
  color: ${colors.black[700]};
  font-weight: 600;
  letter-spacing: 0.02rem;
  text-decoration: none;
  ${COMMON}

  :hover {
    text-decoration: underline;
  }
`
