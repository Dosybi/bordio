import styled from 'styled-components'

const KanbanBoard = ({ board, numberOfTasks, children }) => {
  return (
    <KanbanBoardWrapper>
      <KanbanBoardHeader>
        <div>{board}</div>
        <NumberOfTasks>{numberOfTasks}</NumberOfTasks>
      </KanbanBoardHeader>
      <TasksWrapper>{children}</TasksWrapper>
    </KanbanBoardWrapper>
  )
}

const KanbanBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const KanbanBoardHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 27px 0 13px 0;
  font-weight: 500;
  border-bottom: 1px solid #f3f3f3;
`

const NumberOfTasks = styled.div`
  background: #e8ebef;
  border-radius: 100px;
  font-weight: 400;
  color: #8c939f;
  padding: 2px 9px;
`

const TasksWrapper = styled.div`
  padding: 39px 10px 0 10px;
  border-right: 1px solid #f3f3f3;
  height: 100%;
`

export default KanbanBoard
