import React from 'react'
import styled from 'styled-components';
import { Button, useWalletModal } from '@evercreative/bakery-tools-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const StyledButton = styled(Button)`
  color: ${({ theme }) => !theme.isDark ? theme.colors.primary : 'white' };
  margin-top: 20px;
`;

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <StyledButton variant='secondary' onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </StyledButton>
  )
}

export default UnlockButton
