import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { Flex } from './box'
import { Icon, IconType } from './icons'

export const Footer: React.FC = () => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    bg={colors.black[100]}
    height={80}
    px={20}
  >
    <small>© kenshir0f 2021</small>
    <Flex>
      <SNSIcon type="twitter" />
      <SNSIcon type="github" />
      <SNSIcon type="note" />
      <SNSIcon type="speakerdeck" />
    </Flex>
  </Flex>
)

interface Props {
  type: IconType
}

const SNSIcon: React.FC<Props> = ({ type }) => {
  const userId = type === 'note' ? 'fjkn' : 'kenshir0f'
  const href = `https://${type}.com/${userId}`
  return (
    <SNSLink href={href} target="_blank" aria-label={`${type}`}>
      <Icon type={type} color={colors.black[900]} role="img" aria-hidden />
    </SNSLink>
  )
}

const SNSLink = styled.a`
  margin-left: 24px;
  height: 24px;
`
