import { Button, Login, useWalletModal } from '@pancakeswap-libs/uikit'
import React from 'react'
import styled from 'styled-components'

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`

interface Props {
  account?: string
  login: Login
  logout: () => void
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <AccessibilityContainer>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
           size="sm"
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          Connect
        </Button>
      )}
    </AccessibilityContainer>
  )
}

export default UserBlock
