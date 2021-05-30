import styled from 'styled-components'
import React from 'react'
import { colors } from '../utils/colors'
import { Flex } from './box'
import { COMMON, COMMON_PROPS } from '../utils/constants'
import { theme } from '../utils/theme'

interface Props {
  src: string
}

export const Profile: React.FC<Props> = ({ src }) => {
  const twitterUrl = 'https://twitter.com/kenshir0f'
  const { sm, md, h2, h3 } = theme.fontSizes

  return (
    <Flex alignItems="center" flexDirection="column" mt={[40, 60]}>
      <Image src={src} alt="プロフィール画像" />
      <Name fontSize={[h3, h2]} mt={[3, 4]}>
        Kenshiro Fujii
      </Name>
      <TwitterID href={twitterUrl} mt={[2, 3]} fontSize={[sm, md]}>
        @kenshir0f
      </TwitterID>
    </Flex>
  )
}

const Image = styled.img<COMMON_PROPS>`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-sizing: border-box;
  ${COMMON}
`

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
