import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex } from '@evercreative/bakery-tools-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd, usePricePlockBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress, getPlockAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'
import ActionButton from '../../../components/ActionButton';

const StyledFarmStakingCard = styled(Card)`
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const PlockWrapper = styled.div`
  margin-left: 60px;
  img {
    border-radius: 50%;
  }
`;

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const plockBalance = getBalanceNumber(useTokenBalance(getPlockAddress()))
  const tbakePrice = usePriceCakeBusd().toNumber()
  const plockPrice = usePricePlockBusd().toNumber();

  const allEarnings = useAllEarnings('')
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)

  const plockAllEarnings = useAllEarnings('PLOCK')
  const plockEarningsSum = plockAllEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)

  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  console.log('ant : balancesWithValue => ', balancesWithValue);
  const { onReward } = useAllHarvest(balancesWithValue)

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      setPendingTx(false)
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <Flex>
            <div>
                <CardImage src="/images/logo.png" alt="bake logo" width={48} height={48} />
                <Block>
                    <Label>TBAKE to Harvest</Label>
                    <CakeHarvestBalance earningsSum={earningsSum}/>
                    <Label>~${(tbakePrice * earningsSum).toFixed(2)}</Label>
                </Block>
                <Block>
                    <Label>TBAKE in Wallet</Label>
                    <CakeWalletBalance cakeBalance={cakeBalance} />
                    <Label>~${(tbakePrice * cakeBalance).toFixed(2)}</Label>
                </Block>
            </div>
            <PlockWrapper>
                <CardImage src="/images/farms/PLOCK.png" alt="bake logo" width={48} height={48} />
                <Block>
                    <Label>PLOCK to Harvest</Label>
                    <CakeHarvestBalance earningsSum={plockEarningsSum}/>
                    <Label>~${(plockPrice * plockEarningsSum).toFixed(2)}</Label>
                </Block>
                <Block>
                    <Label>PLOCK in Wallet</Label>
                    <CakeWalletBalance cakeBalance={plockBalance} />
                    <Label>~${(plockPrice * plockBalance).toFixed(2)}</Label>
                </Block>
            </PlockWrapper>
        </Flex>
        <Actions>
          {account ? (
            <ActionButton
              variant='secondary'
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? 'Collecting TBAKE'
                : `Harvest all (${balancesWithValue.length})`}
            </ActionButton>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
