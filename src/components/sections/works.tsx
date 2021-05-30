import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { BaseProps, COMMON, COMMON_PROPS } from '../../utils/constants'
import { theme } from '../../utils/theme'
import { Box, Grid } from '../box'
import { Heading } from '../text'
import { StaticImage } from 'gatsby-plugin-image'

const komerco_jpg = '../../images/works/komerco.jpg'
const stella_jpg = '../../images/works/stella.jpg'

export const Works: React.FC<BaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading icon="book" mb={3} text="Works" />
      <Grid>
        <Box>

        </Box>
      </Grid>
    </Box>
  )
}

// Fixme: gatsby-plugin-image では props 用いて静的画像を操作することができないため、冗長になるが4つ分の画像を用意
// ref: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/#restrictions-on-using-staticimage
const StopCovidImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/stop-covid.jpg"
      alt="東京都 新型コロナウイルス感染症対策サイト"
      width={160}
      height={160}
      style={{ borderRadius: 4 }}
      placeholder="blurred"
    />
  )
}

const StellaImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/stella.jpg"
      alt="Stella"
      width={160}
      height={160}
      style={{ borderRadius: 4 }}
      placeholder="blurred"
    />
  )
}

const KomercoImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/komerco.jpg"
      alt="Komerco"
      width={160}
      height={160}
      style={{ borderRadius: 4 }}
      placeholder="blurred"
    />
  )
}

const MagoChImage: React.FC = () => {
  return (
    <StaticImage
      src="../../images/works/mago-ch.jpg"
      alt="まごチャンネル"
      width={160}
      height={160}
      style={{ borderRadius: 4 }}
      placeholder="blurred"
    />
  )
}
