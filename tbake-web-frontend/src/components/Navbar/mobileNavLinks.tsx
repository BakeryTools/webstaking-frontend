import { Login } from '@pancakeswap/uikit'
import React from 'react'
import styled from 'styled-components'

import Accessibility from './UserBlock'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 8;
`

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 20px;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

const Marginer = styled.div`
  height: 2em;
`

interface Props {
  isOpen: boolean
  // eslint-disable-next-line react/require-default-props
  account?: string
  login: Login
  logout: () => void
}

function MobileNavLinks({ isOpen, account, login, logout }: Props) {
  return (
    <NavLinksContainer>
      <Accessibility account={account} login={login} logout={logout} />

      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/">About TBake</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">How it works</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Whitepaper</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Roadmap</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Contact</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Hotspot</Link>
          </LinkItem>
          <LinkItem>
            <Link style={{ color: '#FE6220' }} href="/">
              Farms
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Chart</Link>
          </LinkItem>
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  )
}
export default MobileNavLinks
