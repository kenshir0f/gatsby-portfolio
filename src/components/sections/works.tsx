import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Box, Grid } from '../box'
import { Heading } from '../text'
import { StaticImage } from 'gatsby-plugin-image'

export const Works: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="book" mb={3} text="Works" />
      <Grid gridGap="24px" gridTemplateColumns={['1fr', '1fr 1fr']}>
        <Work
          image={<StopCovidImage />}
          title="東京都 新型コロナウイルス感染症対策サイト"
          description="Frontend Dev / UI Design"
        />
        <Work
          image={<StellaImage />}
          title="Stella"
          description="Frontend Dev / UI Design"
        />
        <Work
          image={<KomercoImage />}
          title="Komerco"
          description="Frontend Dev / UI Design"
        />
        <Work
          image={<MagoChImage />}
          title="まごチャンネル"
          description="Frontend Dev / UI Design"
        />
      </Grid>
    </Box>
  )
}

interface Props {
  image: JSX.Element
  title: string
  description: string
}

const Work: React.FC<Props> = ({ image, title, description }) => {
  return (
    <Box>
      {image}
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Box>
  )
}

const Title = styled.p`
  color: ${colors.black[900]};
  font-weight: 600;
  font-size: ${theme.fontSizes.lg};
  margin-top: 12px;
  line-height: 125%;
  letter-spacing: 0.02rem;
`

const Desc = styled.span`
  color: ${colors.black[500]};
  font-size: ${theme.fontSizes.sm};
  margin-top: 8px;
  line-height: 125%;
  letter-spacing: 0.01rem;
`

// Fixme: gatsby-plugin-image では props 用いて静的画像を操作することができないため、冗長になるが4つ分の画像を用意
// ref: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/#restrictions-on-using-staticimage
const StopCovidImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/stop-covid.jpg"
      alt="東京都 新型コロナウイルス感染症対策サイト"
      style={{ borderRadius: 4, objectFit: 'cover', width: '100%' }}
      placeholder="blurred"
    />
  )
}

const StellaImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/stella.jpg"
      alt="Stella"
      style={{ borderRadius: 4, objectFit: 'cover', width: '100%' }}
      placeholder="blurred"
    />
  )
}

const KomercoImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/komerco.jpg"
      alt="Komerco"
      style={{ borderRadius: 4, objectFit: 'cover', width: '100%' }}
      placeholder="blurred"
    />
  )
}

const MagoChImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/mago-ch.jpg"
      alt="まごチャンネル"
      style={{ borderRadius: 4, objectFit: 'cover', width: '100%' }}
      placeholder="blurred"
    />
  )
}
