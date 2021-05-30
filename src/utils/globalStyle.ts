import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, "SF Pro JP", "Hiragino Kaku Gothic Pro", 'Noto Sans JP', "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
}
`
