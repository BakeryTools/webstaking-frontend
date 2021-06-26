
import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'TBAKE-BUSD LP',
    lpAddresses: {
      97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'TBAKE',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'TBAKE-BNB LP',
    lpAddresses: {
      97: '0x09a53511f17eA9737B9B445f1ffC2A42B90fbcA0',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'TBAKE',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x575Cb459b6E6B8187d3Ef9a25105D64011874820',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TBAKE',
    lpAddresses: {
      97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // TBAKE-BUSD LP
    },
    tokenSymbol: 'TBAKE',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0x575Cb459b6E6B8187d3Ef9a25105D64011874820',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // BNB-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
]

export default farms
