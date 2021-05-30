import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Box } from '../box'
import { Heading } from '../text'

export const Resume: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="paper" mb={[4, 5]} text="Resume" />
      <CompanyHistory>Cookpad Inc. | 2017 - Present</CompanyHistory>
      <Department>Design Strategy Dept | 2020 - Present</Department>
      <Description>デザイン基盤グループ長</Description>
      <Department>Tech Dept | 2020</Department>
      <Description>
        cookpad.com のリファクタリング、デザインライブラリの更新
      </Description>
      <Department>Komerco Dept | 2017 - 2020</Department>
      <Description>デザイン基盤グループ長</Description>
      <CompanyHistory>Chikaku, Inc. | 2015 - 2018</CompanyHistory>
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
  font-size: ${theme.fontSizes.md};
  margin-bottom: 20px;
  letter-spacing: 0.02rem;
`

const Department = styled.p`
  color: ${colors.black[700]};
  font-size: ${theme.fontSizes.xs};
  margin-bottom: 8px;
  letter-spacing: 0.01rem;
`

const Description = styled.p`
  color: ${colors.black[700]};
  font-size: ${theme.fontSizes.sm};
  margin-bottom: 24px;
  letter-spacing: 0.01rem;
`
