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
          image={<CookpadImage />}
          title="クックパッド"
          description="Frontend Dev"
          href="https://note.com/dex1t/n/nd3a758a44c8d"
        />
        <Work
          image={<StopCovidImage />}
          title="東京都 新型コロナウイルス感染症対策サイト"
          description="Frontend Dev / UI Design"
          href="https://stopcovid19.metro.tokyo.lg.jp/"
        />
        <Work
          image={<StellaImage />}
          title="Stella"
          description="個人開発 / 日報サービス"
          href="https://stella-app.jp"
        />
        <Work
          image={<KomercoImage />}
          title="Komerco"
          description="UI Design / Service Design / Frontend Dev"
          href="https://komer.co"
        />
        <Work
          image={<MagoChImage />}
          title="まごチャンネル"
          description="Graphic Design / UI Design"
          href="https://mago-ch.com"
        />
      </Grid>
    </Box>
  )
}

interface Props {
  image: JSX.Element
  title: string
  description: string
  href: string
}

const Work: React.FC<Props> = ({ image, title, description, href }) => {
  return (
    <Box>
      <Container href={href} target="_blank" rel="noreferrer noopener">
        {image}
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Container>
    </Box>
  )
}

const Container = styled.a`
  text-decoration: none;
`

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
const CookpadImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/cookpad.png"
      alt="クックパッド"
      style={{
        objectFit: 'cover',
        width: '100%',
      }}
      placeholder="blurred"
    />
  )
}

const StopCovidImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/stop-covid.png"
      alt="東京都 新型コロナウイルス感染症対策サイト"
      style={{
        objectFit: 'cover',
        width: '100%',
      }}
      placeholder="blurred"
    />
  )
}

const StellaImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/stella.png"
      alt="Stella"
      style={{
        objectFit: 'cover',
        width: '100%',
      }}
      placeholder="blurred"
    />
  )
}

const KomercoImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/komerco.png"
      alt="Komerco"
      style={{
        objectFit: 'cover',
        width: '100%',
      }}
      placeholder="blurred"
    />
  )
}

const MagoChImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/mago-ch.png"
      alt="まごチャンネル"
      style={{
        objectFit: 'cover',
        width: '100%',
      }}
      placeholder="blurred"
    />
  )
}
