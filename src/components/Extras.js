import styled from 'styled-components'

import Search from '../elements/Search'

import avatar from '../assets/images/Ellipse.png'
import NotificationsIcon from '../elements/NotificationsIcon'

const Extras = () => {
  return (
    <ExtrasWrapper>
      <Search rounded />
      <NotificationsIcon notifications="99+" />
      <Avatar src={avatar} alt="Avatar" />
    </ExtrasWrapper>
  )
}

const ExtrasWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const Avatar = styled.img`
  cursor: pointer;
  width: 40px;
`

export default Extras
