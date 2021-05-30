import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { Box } from '../box'
import { Heading } from '../text'

export const Resume: React.FC = () => {
  return (
    <Box>
      <Heading icon="paper" mb={[4, 5]}>
        Resume
      </Heading>
      <CompanyHistory>Cookpad Inc. | 2017 - Present</CompanyHistory>
      <Department>Design Strategy Dept | 2020 - Present</Department>
      <Description>デザイン基盤グループ長</Description>
      <Department>Tech Dept | 2020</Department>
      <Description>
        cookpad.com のリファクタリング、デザインライブラリの更新
      </Description>
      <Department>Komerco Dept | 2017 - 2020</Department>
      <Description>デザイン基盤グループ長</Description>
      <CompanyHistory>
        サービスの立ち上げからUI デザイン、Webアプリケーションの開発(Next.js x
        Firebase)
      </CompanyHistory>
      <Department>Designer as Intern</Department>
      <Description>
        サービスの立ち上げからUI デザイン、Webアプリケーションの開発(Next.js x
        Firebase)
      </Description>
    </Box>
  )
}

const CompanyHistory = styled.h3`
  color: ${colors.black[900]};
`

const Department = styled.p`
  color: ${colors.black[700]};
`

const Description = styled.p`
  color: ${colors.black[700]};
`
