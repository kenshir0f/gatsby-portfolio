import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'

interface Props {
  name: string
}

export const Tag: React.FC<Props> = ({ name }) => {
  return <Container>{name}</Container>
}

const Container = styled.span`
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  padding: 0 12px;
  height: 32px;
  margin: 12px 12px 0 0;
  border-radius: 4px;
  color: ${colors.black[700]};
  background-color: ${colors.black[100]};
  font-weight: 700;
`
