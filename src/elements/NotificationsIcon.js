import styled from 'styled-components'

import { ReactComponent as BellIcon } from '../assets/icons/bxs-bell.svg'

const NotificationsIcon = ({ notifications }) => {
  return (
    <NotificationsWrapper>
      <BellIcon />
      <NotificationsLabel>
        <div>{notifications}</div>
      </NotificationsLabel>
    </NotificationsWrapper>
  )
}

const NotificationsWrapper = styled.div`
  position: relative;
  padding: 6px 6px 5px 7px;
  cursor: pointer;
`

const NotificationsLabel = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  right: -25%;
  top: -12.5%;
  bottom: 50%;
  background: #f21247;
  border: 1px solid #ffffff;
  border-radius: 4px;
  font-size: 10px;
  color: #fff;
  width: 24px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default NotificationsIcon
