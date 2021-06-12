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

    div[id="root"] {
      background-image: url('/images/background.svg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    ::-webkit-scrollbar-thumb {
      background: #c4a484; 
    }

    div[role="presentation"] {
      background-color: #E4D4B3;
      div[color="primary"] {
        color: white;
      }
    }

    button[id="wallet-connect-metamask"] {
      background-color: #964B00;
      div[color="primary"] {
        color: white;
      }
    }

    button[id="wallet-connect-tokenpocket"] {
      background-color: #964B00;
      div[color="primary"] {
        color: white;
      }
    }

    button[id="wallet-connect-trustwallet"] {
      background-color: #964B00;
      div[color="primary"] {
        color: white;
      }
    }

    button[id="wallet-connect-mathwallet"] {
      background-color: #964B00;
      div[color="primary"] {
        color: white;
      }
    }

    button[id="wallet-connect-walletconnect"] {
      background-color: #964B00;
      div[color="primary"] {
        color: white;
      }
    }

    button[id="wallet-connect-binance chain wallet"] {
      background-color: #964B00;
      div[color="primary"] {
        color: white;
      }
    }

    button[id="wallet-connect-safepal wallet"] {
      background-color: #964B00;
      div[color="primary"] {
        color: white;
      }
    }

    div {
      button[scale="sm"] {
        color: #FE6220;
        border-color: #FE6220;
      }
    }

    div {
      div[role="button"] {
        color: #FE6220;

        svg {
          fill: #FE6220;
        }
      }
    }

    svg[color="primary"] {
       fill: white;
     }
   
     a[target="_blank"] {
       color: white;
    }
  }
`
// h2[color="text"] {
//   color: black;
// }

// div[color="primary"] {
//   color: black;
// }

// a[target="_blank"] {
//   color: black;

// }
export default GlobalStyle
