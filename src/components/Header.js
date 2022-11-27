import styled from 'styled-components'

import Control from '../elements/Control'
import Extras from './Extras'

const controls = [
  {
    label: 'Add new',
    type: 'button',
  },
  {
    label: 'Kanban',
    type: 'dropdown',
  },
  {
    label: 'Filter',
    type: 'dropdown',
  },
]

const Header = () => {
  return (
    <HeaderWrapper>
      <ControlsWrapper>
        {controls.map((control) => {
          return <Control {...control} key={control.label} />
        })}
      </ControlsWrapper>
      <ExtrasWrapper>
        <Extras />
      </ExtrasWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  box-shadow: 0px 2px 4px #f0f1f2;
`

const ControlsWrapper = styled.div`
  display: flex;
  gap: 16px;
`

const ExtrasWrapper = styled.div`
  display: flex;
  gap: 16px;
`

export default Header
