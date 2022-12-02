import styled from 'styled-components'
import update from 'immutability-helper'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState, useCallback } from 'react'

import { ReactComponent as PlusIcon } from '../assets/icons/Union.svg'
import { allTasks, allBoards } from '../data/index'

import Task from '../elements/Task'
import KanbanBoard from './KanbanBoard'

const Kanban = () => {
  const [tasks, setTasks] = useState(allTasks)

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setTasks((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    )
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanWrapper>
        {allBoards.map((board, index) => {
          return (
            <KanbanBoard
              board={board}
              numberOfTasks={
                tasks.filter((task) => task.board === board).length
              }
              key={index}
            >
              {tasks
                ?.filter((task) => task.board === board)
                .map((task) => {
                  return (
                    <Task
                      {...task}
                      index={tasks.indexOf(task)}
                      key={task.id}
                      moveCard={moveCard}
                    />
                  )
                })}
            </KanbanBoard>
          )
        })}
        <NewBoard>
          <NewBoardHeader>
            <PlusIcon />
            <div>Create status</div>
          </NewBoardHeader>
        </NewBoard>
      </KanbanWrapper>
    </DndProvider>
  )
}

const KanbanWrapper = styled.div`
  display: flex;
  padding-left: 10px;
`

const NewBoard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const NewBoardHeader = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 29px 0 15px 36px;
  font-weight: 400;
  border-bottom: 1px solid #f3f3f3;
  border-left: 1px solid #f3f3f3;
  color: #8c939f;
  cursor: pointer;
`

export default Kanban
