import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #FFFFFF;
    --secondary: #B18B5A;
    --background: #FCF8F3;
    --text-title: #3A3A3A;
    --text-paragraph: #616161;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: auto;
  }

  html, body, #__next {
    height: auto;
    min-height: 100vh;
  }

  body {
    font-family: 'ABeeZee',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    font-size: 2rem;
  }
`

export default GlobalStyle