import styled from 'styled-components'
import React from 'react'
import { colors } from '../utils/colors'
import { Box } from './box'

interface Props {
  src: string
}

export const Profile: React.FC<Props> = ({ src }) => {
  const twitterUrl = 'https://twitter.com/kenshir0f'

  return (
    <Box>
      <Image src={src} alt="プロフィール画像" />
      <Name>Kenshiro Fujii</Name>
      <TwitterID href={twitterUrl}>@kenshir0f</TwitterID>
    </Box>
  )
}

const Image = styled.img`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-sizing: border-box;
`

const Name = styled.h1`
  color: ${colors.black[900]};
`

const TwitterID = styled.a`
  color: ${colors.black[700]};
  text-decoration: none;
`
