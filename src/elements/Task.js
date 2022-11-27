import styled from 'styled-components'

const Task = ({ title, time, board, label }) => {
  return (
    <TaskWrapper label={label}>
      <TaskTitle>{title}</TaskTitle>
      <TaskTime>{time}h</TaskTime>
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
  color: #222222;
`

const TaskTime = styled.div`
  color: #435e52;
`

export default Task
