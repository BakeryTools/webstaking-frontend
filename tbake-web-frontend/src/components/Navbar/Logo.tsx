import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div<Props>`
  display: flex;
  width: ${({ isMobile }) => isMobile && '100%'};
  align-items: center;
  justify-content: ${({ isMobile }) => isMobile && 'center'};
`

const LogoImg = styled.div`
  width: 140px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
  }
`

type Props = {
  isMobile: boolean
}

function Logo({ isMobile }: Props) {
  return (
    <LogoWrapper isMobile={isMobile}>
      <LogoImg>
        <img src="/images/logo.jpeg" alt="Bakery Tool logo" />
      </LogoImg>
    </LogoWrapper>
  )
}

export default Logo
