import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
    ::-webkit-scrollbar-thumb {
      background: #964B00; 
    }

    div[role="presentation"] {
      background-color: #E4D4B3;
    }

    h2[color="text"] {
      color: black
    }

    div[color="primary"] {
      color: black
    }

    a[color="primary"] {
      color: black

    }

    svg[color="primary"] {
       fill:#964B00
     }
   
  }
`

export default GlobalStyle
