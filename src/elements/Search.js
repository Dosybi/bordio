import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '../assets/icons/Search.svg'

const Search = ({ rounded }) => {
  return (
    <InputWrapper>
      <Input placeholder="Search..." rounded={rounded}></Input>
      <Icon rounded={rounded}>
        <SearchIcon />
      </Icon>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  border-radius: ${(props) => (props.rounded ? '50px;' : '4px')};
  background: ${(props) => (props.rounded ? '#F5F8FA' : '#2D4071')};
  padding: ${(props) => (props.rounded ? '12px 16px' : '9px 8px 9px 10px')};
  margin-bottom: ${(props) => (props.rounded ? '0' : '19px')};
  color: #8c939f;
  border: none;
`

const Icon = styled.i`
  position: absolute;
  top: ${(props) => (props.rounded ? '12px' : '8px')};
  right: ${(props) => (props.rounded ? '16px' : '16px')};
`

export default Search
