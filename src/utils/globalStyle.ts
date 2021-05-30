import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body, h1, h2, h3, p, span, small, div, a {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, "SF Pro JP", "Hiragino Kaku Gothic Pro", 'Noto Sans JP', "Segoe UI", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
`
