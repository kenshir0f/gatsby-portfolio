import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps, COMMON, COMMON_PROPS } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Box } from '../box'
import { Heading } from '../text'

export const About: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="user" mb={[3, 4]} text="About" />
      <BodyText lineHeight={['160%', '180%']}>
        UI デザイナー 兼 フロントエンドエンジニア
        <br />
        モバイルアプリやウェブの開発や、デザインシステムの構築を仕事にしています。
        <br />
        日常の生活がちょっと楽しくなるサービスを作るのが好き。
        <br />
        プロフィールの猫はブリティッシュショートヘアのごまおさんです。(2歳)
      </BodyText>
    </Box>
  )
}

const BodyText = styled.p<COMMON_PROPS>`
  margin: 0;
  color: ${colors.black[600]};
  font-size: ${theme.fontSizes.md};
  ${COMMON};
`
