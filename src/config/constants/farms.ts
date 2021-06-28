
import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'TBAKE-BUSD LP',
    lpAddresses: {
      97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
      56: '0x91F2DBfB001E1CF49243CE162BFDff644B0C1647',
    },
    tokenSymbol: 'TBAKE',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x26d6e280f9687c463420908740ae59f712419147',
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
      56: '0xf1842C074DcAD6091ac029056A5af4F6007f0F52',
    },
    tokenSymbol: 'TBAKE',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x26d6e280f9687c463420908740ae59f712419147',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x575Cb459b6E6B8187d3Ef9a25105D64011874820',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
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
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TBAKE',
    lpAddresses: {
      97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
      56: '0x91F2DBfB001E1CF49243CE162BFDff644B0C1647', // TBAKE-BUSD LP
    },
    tokenSymbol: 'TBAKE',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x26d6e280f9687c463420908740ae59f712419147',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  // {
  //   pid: 4,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '0x575Cb459b6E6B8187d3Ef9a25105D64011874820',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAddresses: contracts.busd,
  // },
]

export default farms
