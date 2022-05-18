import React from 'react'
import { Box } from '../box'
import { Date, Heading, TitleLink } from '../text'
import { ReadMoreButton } from '../button'
import { BaseProps } from '../../utils/constants'

export const Blogs: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="edit" mb={[3, 4]} text="Blogs" />
      <TitleLink
        text="Figma Config 2022 で便利になった機能のおさらい"
        href="https://note.com/fjkn/n/n76fcb21eb7b1"
      />
      <Date time="2022.05.11" />
      <TitleLink
        text="クックパッドのデザイン品質を支える Apron Design System の構築"
        href="https://note.com/fjkn/n/nf73742ec925a"
      />
      <Date time="2021.07.06" />
      <TitleLink
        text="デザイン基盤を整えるため、サービス開発から少し離れた話"
        href="https://note.com/fjkn/n/nc8f5498e5e69"
      />
      <Date time="2020.11.20" />
      <TitleLink
        text="FigmaのコンポーネントをVariantsで状態管理する"
        href="https://note.com/fjkn/n/nfa218f39413e"
      />
      <Date time="2020.10.29" />
      <ReadMoreButton />
    </Box>
  )
}
