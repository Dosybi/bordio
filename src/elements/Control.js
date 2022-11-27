import styled from 'styled-components'

import { ReactComponent as PlusIcon } from '../assets/icons/Plus.svg'
import { ReactComponent as Arrow } from '../assets/icons/ArrowDark.svg'
import { useState, useRef, useEffect } from 'react'

const dropdown = [
  {
    label: 'Board view',
  },
  {
    label: 'Table view',
  },
  {
    label: 'Kanban',
    isActive: true,
  },
]

const Control = ({ label, type }) => {
  let [isToggled, setIsToggled] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isToggled && ref.current && !ref.current.contains(e.target)) {
        setIsToggled(false)
      }
    }

    document.addEventListener('click', checkIfClickedOutside)

    return () => document.removeEventListener('click', checkIfClickedOutside)
  }, [isToggled])

  return (
    <HeaderControlWrapper>
      <HeaderControl
        type={type}
        onClick={() => setIsToggled((oldState) => !oldState)}
        ref={ref}
      >
        {type === 'button' && <PlusIcon />}
        {label}
        {type === 'dropdown' && <Arrow />}
      </HeaderControl>
      {dropdown &&
        (label === 'Kanban' ||
          label === 'Table view' ||
          label === 'Board view') && (
          <Dropdown isToggled={isToggled}>
            {dropdown.map((item) => {
              return (
                <DropdownItem isActive={item.isActive}>
                  {item.label}
                </DropdownItem>
              )
            })}
          </Dropdown>
        )}
    </HeaderControlWrapper>
  )
}

const HeaderControlWrapper = styled.div`
  position: relative;
`

const HeaderControl = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  height: 40px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.type === 'button' ? '#ffffff' : '#222222')};
  background: ${(props) => (props.type === 'button' ? '#0094ff' : '#F5F8FA')};
`

const Dropdown = styled.div`
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
  position: absolute;
  width: 132px;
  top: 48px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: ${(props) => (props.isToggled ? 'block' : 'none')}; ;
`

const DropdownItem = styled.div`
  padding: 8px;
  background: ${(props) => (props.isActive ? '#F5F8FA' : '')};
  cursor: ${(props) => (props.isActive ? 'auto' : 'pointer')};
  border-radius: 4px;
  &:hover {
    background: #f5f8fa;
  }
`

export default Control
