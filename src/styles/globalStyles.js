import { createGlobalStyle } from 'styled-components'

import theme from './themes'
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: calc(100vw - 10%);
  margin:0 auto;
  @media ${theme.breakpoints.sm} {
    max-width: calc(100vw - 5%);
  }

}

body{
  background-color:#333;
  min-height:100vh;
  margin-top:0;
  font-family:Verdana;
}
a{
  text-decoration: none;
  color: inherit;
}
`

export default GlobalStyle
