import styled from 'styled-components'

import Header from './Header'
import Kanban from './Kanban'

const Board = () => {
  return (
    <BoardWrapper>
      <Header />
      <Kanban />
    </BoardWrapper>
  )
}

const BoardWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export default Board
