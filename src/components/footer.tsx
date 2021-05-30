import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { theme } from '../utils/theme'
import { Box, Flex } from './box'
import { Icon, IconType } from './icons'

export const Footer: React.FC = () => (
  <Flex
    mt={[60, 120]}
    bg={colors.black[100]}
    justifyContent="center"
    height={80}
  >
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={20}
      maxWidth={720}
      width="100%"
    >
      <Copyright>© kenshir0f 2021</Copyright>
      <Flex>
        <SNSIcon type="twitter" />
        <SNSIcon type="github" />
        <SNSIcon type="note" />
        <SNSIcon type="speakerdeck" />
      </Flex>
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
    <SNSLink
      href={href}
      target="_blank"
      aria-label={`${type}`}
      rel="noreferrer noopener"
    >
      <Icon type={type} color={colors.black[900]} role="img" aria-hidden />
    </SNSLink>
  )
}

const Copyright = styled.small`
  color: ${colors.black[900]};
  font-size: ${theme.fontSizes.sm};
  letter-spacing: 0.02rem;
`

const SNSLink = styled.a`
  margin-left: 24px;
  height: 24px;
`
