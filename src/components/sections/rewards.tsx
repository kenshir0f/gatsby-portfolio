import React from 'react'
import { BaseProps } from '../../utils/constants'
import { Box } from '../box'
import { Caption, Heading, TitleLink } from '../text'

export const Rewards: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="star" mb={[3, 4]}>
        Rewards / etc
      </Heading>
      <TitleLink
        text="Good Design Award 2020 金賞"
        href="https://www.g-mark.org/award/describe/51112"
      />
      <Caption
        text="立ち上げからデザインと開発に携わった「東京都
        新型コロナウイルス感染症対策サイト」がグッドデザイン賞ベスト100を受賞しました。"
        mb={4}
      />
      <TitleLink
        text="Web+DB Press vol.113"
        href="https://gihyo.jp/magazine/wdpress/archive/2019/vol113"
      />
      <Caption
        text="デザインツール Figma の使い方について記事を書きました。"
        mb={4}
      />
      <TitleLink
        text="Logmi Tech"
        href="https://logmi.jp/tech/articles/321090"
        youtube
      />
      <Caption
        text="Tech Conf 2019 で登壇した内容が記事になりました。"
        mb={4}
      />

      <TitleLink
        text="Good Design Award 2016 Best 100"
        href="https://www.g-mark.org/award/describe/43755"
      />
      <Caption text="立ち上げからデザインに携わった「まごチャンネル」がグッドデザイン賞ベスト100を受賞しました。" />
    </Box>
  )
}
