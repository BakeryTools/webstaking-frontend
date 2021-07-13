import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
// import masterChefABI from 'config/abi/masterchef.json'
import { farmsConfig } from 'config/constants'
import getMasterchefABI from 'utils/getMasterchefABI'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      const res = [];
      for (let i = 0; i < farmsConfig.length; i++) {
        const call = [{
          address: getMasterChefAddress(farmsConfig[i].masterChefSymbol),
          name: farmsConfig[i].masterChefSymbol === 'PLOCK' ? 'pendingPLOCK' : 'pendingTBAKE',
          params: [farmsConfig[i].pid, account],
        }];

        const masterChefABI = getMasterchefABI(farmsConfig[i].masterChefSymbol);
        const farmRes = multicall(masterChefABI, call);
        res.push(farmRes);
      }

      const allBalances = await Promise.all(res);
      setBalance(allBalances.map(balance => balance[0]));

      // const calls = farmsConfig.map((farm) => ({
      //   address: getMasterChefAddress(farm.masterChefSymbol),
      //   name: 'pendingTBAKE',
      //   params: [farm.pid, account],
      // }))

      // const res = await multicall(masterChefABI, calls)

      // setBalance(res)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh])

  return balances
}

export default useAllEarnings
