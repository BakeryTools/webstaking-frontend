import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  background: ${({ background }) => background || 'transparent'};
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  h2 {
    color: black;
  }
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
