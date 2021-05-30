import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps, COMMON, COMMON_PROPS } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Box } from '../box'
import { Heading } from '../text'
import { StaticImage } from 'gatsby-plugin-image'

export const Works: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="book" mb={3} text="Works" />
      <Work image="stella" title="Stella" caption="個人開発 / 日報サービス" />
    </Box>
  )
}

interface Props {
  image: string
  title: string
  caption: string
}

const Work: React.FC<Props> = ({ image, title, caption }) => {
  return (
    <Box>
      <Image name={image} title={title} />
      <p>{title}</p>
      <span>{caption}</span>
    </Box>
  )
}

interface ImageProps {
  name: string
  title: string
}

const Image: React.FC<ImageProps> = ({ name, title }) => {
  const src = `../images/works/${name}.jpg`
  return (
    <StaticImage
      src={src}
      alt={title}
      width={160}
      height={160}
      style={{ borderRadius: '50%' }}
      placeholder="blurred"
      loading="eager"
    />
  )
}
