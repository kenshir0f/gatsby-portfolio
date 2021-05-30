import styled from 'styled-components'
import React from 'react'
import { colors } from '../utils/colors'
import { theme } from '../utils/theme'
import { Flex } from './box'

export const ReadMoreButton: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <ButtonBase
        href="https://note.com/fjkn"
        target="_blank"
        rel="noreferrer noopener"
      >
        もっと見る
      </ButtonBase>
    </Flex>
  )
}

const ButtonBase = styled.a`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 180px;
  border-radius: 6px;
  background-color: ${colors.white};
  border: 1px solid ${colors.black[700]};
  color: ${colors.black[700]};
  letter-spacing: 0.04rem;
  font-size: ${theme.fontSizes.sm};
  line-height: 40px;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background-color: #F5FAFD;
  }
`
