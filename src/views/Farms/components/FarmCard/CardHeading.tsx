import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Tag, Flex, Heading, Image, Text } from '@evercreative/bakery-tools-uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'
import { Farm } from 'state/types'

interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}
export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
  farm?: FarmWithStakedValue
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const TokenSymbolLabel = styled(Text)`
  line-height: 1.2;
`;

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const FarmImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  width: 7.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 80px;
`;

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farm,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <FarmImageWrapper>
        <Image src={`/images/farms/${farm.tokenSymbol}.png`} alt={farm.tokenSymbol} width={36} height={36} />
        <Image src={`/images/farms/${farm.quoteTokenSymbol}.png`} alt={farm.quoteTokenSymbol} width={36} height={36} />
      </FarmImageWrapper>
      <Flex flexDirection="column" alignItems="flex-end">
        <TokenSymbolLabel color='primary' fontSize='18px' >{farm.quoteTokenSymbol}</TokenSymbolLabel>
        <TokenSymbolLabel fontSize='18px'>{farm.tokenSymbol}</TokenSymbolLabel>
        {/* <Heading mb="4px">{lpLabel}</Heading> */}
        {/* <Flex justifyContent="center">
          {depositFee === 0 ? <NoFeeTag /> : null}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex> */}
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
