import React from 'react'
import styled from 'styled-components'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #ff6320;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

function NavLinks() {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="https://bakerytools.io/">About TBake</Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://bakerytools.io/">How it works</Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://bakerytools.io/wp-content/uploads/2021/05/Whitepaper.bakerytools-1.pdf">Whitepaper</Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://bakerytools.io/">Roadmap</Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://bakerytools.io/">Contact</Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://bakerytools.io/hotspot/">Hotspot</Link>
        </LinkItem>
        <LinkItem>
          <Link style={{ color: '#FE6220' }} href="/">
            Farms
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/">Chart</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  )
}

export default NavLinks
