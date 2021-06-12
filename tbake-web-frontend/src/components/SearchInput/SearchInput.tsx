import React, { useState, useMemo } from 'react'
import { Input } from '@pancakeswap/uikit'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { useTranslation } from 'contexts/Localization'

const StyledInput = styled(Input)`
  border-radius: 16px;
  margin-left: auto;
  border: 1px solid #964b00;
  color: #964b00;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #c3a484;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c3a484;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #c3a484;
  }
`

const InputWrapper = styled.div`
  position: relative;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const Container = styled.div<{ toggled: boolean }>``

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const SearchInput: React.FC<Props> = ({ onChange: onChangeCallback, placeholder = 'Search' }) => {
  const [toggled, setToggled] = useState(false)
  const [searchText, setSearchText] = useState('')

  const { t } = useTranslation()

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback],
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }

  return (
    <Container toggled={toggled}>
      <InputWrapper>
        <StyledInput
          value={searchText}
          onChange={onChange}
          placeholder={t(placeholder)}
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
