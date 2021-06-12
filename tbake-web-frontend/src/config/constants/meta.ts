import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BakeryTools',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BakeryTools), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BakeryTools')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BakeryTools')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BakeryTools')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BakeryTools')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BakeryTools')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BakeryTools')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('BakeryTools')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BakeryTools')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BakeryTools')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('BakeryTools')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('BakeryTools')}`,
      }
    default:
      return null
  }
}
