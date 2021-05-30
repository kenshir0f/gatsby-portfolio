import React from 'react'
import { Box } from '../box'
import { Date, Heading, TitleLink } from '../text'
import { ReadMoreButton } from '../button'

export const Blogs: React.FC = () => {
  return (
    <Box>
      <Heading icon="edit" mb={[3, 4]}>
        Blogs
      </Heading>
      <TitleLink
        text="デザイン基盤を整えるため、サービス開発から少し離れた話"
        href="https://note.com/fjkn/n/nc8f5498e5e69"
      />
      <Date time="2020.01.01" />
      <TitleLink
        text="FigmaのコンポーネントをVariantsで状態管理する"
        href="https://note.com/fjkn/n/nfa218f39413e"
      />
      <Date time="2020.01.01" />
      <TitleLink
        text="SlackのUXライティングの考え方"
        href="https://note.com/fjkn/n/n39ebfbaf0332"
      />
      <Date time="2020.01.01" />
      <ReadMoreButton />
    </Box>
  )
}
