import styled from 'styled-components'
import Board from './components/Board'

import Sidebar from './components/Sidebar'
import Tools from './components/Tools'

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <Tools />
      <Board />
    </AppWrapper>
  )
}

const AppWrapper = styled.main`
  display: flex;
  width: 100wv;
  height: 100%;
`

export default App
