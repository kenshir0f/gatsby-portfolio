import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  font-family: Lato, -apple-system, BlinkMacSystemFont, "SF Pro JP", "Hiragino Kaku Gothic Pro", 'Noto Sans JP', "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
}
p {
  color: ${colors.black};
  line-height: 165%;
  margin: 0 0 12px;
}
ul {
  margin: 24px 0;
  padding-left: 20px;
}
li {
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 160%;
}
a {
  color: ${colors.blue};
}
`
