import React, { useState } from 'react'
import { Flex, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

// import { Logo } from "../logo";
import { Menu as MenuIcon, X as XIcon } from 'react-feather'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Accessibility from './UserBlock'
import NavLinks from './navLinks'
import MobileNavLinks from './mobileNavLinks'
import Avatar from './Avatar'
import Logo from './Logo'

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  background-color: white;

  button {
    background-color: black;
    border-color: #fe6220;
    border-style: solid;
    border-width: 2px;
  }
`

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`

const RightSection = styled.div`
  display: flex;
`

function Navbar() {
  const { isMd, isSm, isXs } = useMatchBreakpoints()

  const isMobile = isMd || isSm || isXs

  const [isOpen, setOpen] = useState<boolean>(false)

  const { account, connect, reset } = useWallet()
  return (
    <NavbarContainer>
      {isMobile &&
        (isOpen ? <XIcon onClick={() => setOpen(!isOpen)} /> : <MenuIcon onClick={() => setOpen(!isOpen)} />)}
      <Logo isMobile={isMobile} />
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && (
          <Flex>
            <Accessibility account={account} login={connect} logout={reset} />
          </Flex>
        )}
        {isMobile && <MobileNavLinks isOpen={isOpen} account={account} login={connect} logout={reset} />}
      </RightSection>
    </NavbarContainer>
  )
}

export default Navbar
