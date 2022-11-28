import styled from 'styled-components'

const Task = ({ title, time, board, label }) => {
  return (
    <TaskWrapper label={label}>
      <TaskTitle board={board}>{title}</TaskTitle>
      <TaskTime board={board}>{time}h</TaskTime>
    </TaskWrapper>
  )
}

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  gap: 2px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  background: ${(props) => props.label};
`

const TaskTitle = styled.div`
  max-width: 270px;
  color: ${(props) => (props.board === 'Completed' ? '#A5A5A5' : '#222222')};
  text-decoration: ${(props) =>
    props.board === 'Completed' ? 'line-through' : 'none'};
`

const TaskTime = styled.div`
  color: ${(props) => (props.board === 'Completed' ? '#A5A5A5' : '#662E1E')};
`

export default Task
