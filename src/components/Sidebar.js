import styled from 'styled-components'

import { ReactComponent as Logo } from '../assets/images/Logo-White.svg'
import { ReactComponent as Arrow } from '../assets/icons/Arrows.svg'
import avatar from '../assets/images/Ellipse.png'

import Search from '../elements/Search'

const navigation = {
  title: 'My workspace',
  avatar: avatar,
  favourites: {
    title: 'Favourites',
    items: ['Marketing', 'Mobile App'],
  },
  myProjects: {
    title: 'My Projects',
    items: [
      'Marketing',
      'Landing Pages',
      'Wedding',
      'Mobile App',
      'House Construction',
    ],
  },
}

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Search rounded={false} />
      <NavTitle>
        <Avatar src={navigation.avatar} alt="Avatar" />
        {navigation.title}
      </NavTitle>
      <NavHeading>
        <Arrow />
        {navigation.favourites.title}
      </NavHeading>
      {navigation.favourites.items.map((item) => {
        return <NavItem key={item}>{item}</NavItem>
      })}
      <NavHeading>
        <Arrow />
        {navigation.myProjects.title}
      </NavHeading>
      {navigation.myProjects.items.map((item) => {
        return <NavItem key={item}>{item}</NavItem>
      })}
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f1d40;
  height: 100wh;
  width: 219px;
  padding: 26px 16px 0 16px;
`
const LogoWrapper = styled.div`
  margin-bottom: 26px;
  cursor: pointer;
`

const Avatar = styled.img`
  margin-right: 8px;
  cursor: pointer;
  width: 22px;
`

const NavTitle = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #2d4071;
  padding: 5px 0 5px 16px;
  margin: 0 -16px 18px -16px;
  cursor: pointer;
`

const NavHeading = styled.div`
  color: #fff;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const NavItem = styled.div`
  color: #8c939f;
  margin-bottom: 18px;
  cursor: pointer;
`

export default Sidebar
