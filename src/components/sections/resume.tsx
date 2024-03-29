import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps, COMMON, COMMON_PROPS } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Box } from '../box'
import { Heading } from '../text'

export const Resume: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="paper" mb={[4, 5]} text="Resume" />

      <CompanyHistory text="Freelance | 2022 - Present" />
      <Description text="UIデザインやフロントエンド開発、デザインシステムの構築などでお仕事いただいています。" />

      <CompanyHistory text="Cookpad Inc. | 2017 - 2021" />
      <Department text="Design Strategy Dept | 2020 - 2021" />
      <Description text="cookpad.com のデザインシステムの構築及び反映、デザイン基盤Gグループ長" />
      <Department text="Tech Dept | 2020" />
      <Description text="cookpad.com のリファクタリング、デザインライブラリの更新及びデザイン負債の解消" />
      <Department text="Komerco Dept | 2017 - 2020" />
      <Description
        text="ロゴデザイン、サービス設計、UIデザイン、Webアプリケーションの開発(Next.js x
        Firebase)"
      />

      <CompanyHistory text="Chikaku, Inc. | 2015 - 2018" />
      <Department text="Designer as Intern" />
      <Description text="端末の取扱説明書やチラシ、パンフレットのデザイン、アプリのUIデザイン" />
    </Box>
  )
}

interface Props {
  text: string
}

const CompanyHistory: React.FC<Props> = ({ text }) => {
  const { md, lg } = theme.fontSizes
  return <CompanyHistoryBase fontSize={[md, lg]}>{text}</CompanyHistoryBase>
}

const CompanyHistoryBase = styled.h3<COMMON_PROPS>`
  color: ${colors.black[900]};
  margin-bottom: 20px;
  letter-spacing: 0.02rem;
  ${COMMON};
`

const Department: React.FC<Props> = ({ text }) => {
  return (
    <DepartmentBase color={[colors.black[700], colors.black[500]]}>
      {text}
    </DepartmentBase>
  )
}

// NOTE: styled-system で color が responsive の配列を受け取る型がないため any を代用
const DepartmentBase = styled.p<any>`
  margin-bottom: 8px;
  letter-spacing: 0.01rem;
  font-size: ${theme.fontSizes.xs};
  ${COMMON};
`

const Description: React.FC<Props> = ({ text }) => {
  const { sm, md } = theme.fontSizes
  return <DescriptionBase fontSize={[sm, md]}>{text}</DescriptionBase>
}

const DescriptionBase = styled.p<COMMON_PROPS>`
  color: ${colors.black[700]};
  margin-bottom: 24px;
  letter-spacing: 0.01rem;
  ${COMMON}
`
