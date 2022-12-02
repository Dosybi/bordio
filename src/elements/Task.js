import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd'
import { useRef } from 'react'

const Task = ({ id, title, time, board, label, index, moveCard }) => {
  const ref = useRef(null)

  const [{ handlerId }, drop] = useDrop({
    accept: 'task',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex, item, board)

      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: () => {
      return { id, index, board }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  drag(drop(ref))

  return (
    <TaskWrapper
      ref={ref}
      label={label}
      isDragging={isDragging}
      data-handler-id={handlerId}
    >
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
  cursor: grab;
  margin-bottom: 10px;
  background: ${(props) => props.label};
  opacity: ${(props) => (props.isDragging ? '.5' : '1')};
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
