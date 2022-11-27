import styled from 'styled-components'

import { ReactComponent as PlusIcon } from '../assets/icons/Union.svg'

import Task from '../elements/Task'

const tasks = [
  {
    title: 'Check email',
    time: '0:20',
    board: 'New task',
    label: '#ABE9CE',
  },
  {
    title: 'Compare PPC agencies and make a report for Steven',
    time: '3:00',
    board: 'New task',
    label: '#D8DCFF',
  },
  {
    title: 'Meeting with Amanda (PR department)',
    time: '0:30',
    board: 'New task',
    label: '#ABE9CE',
  },
  {
    title: `Get Patrick's approval for homepage new design`,
    time: '0:20',
    board: 'New task',
    label: '#D8DCFF',
  },
  {
    title: `Check email`,
    time: '0:20',
    board: 'Scheduled',
    label: '#FFDFBA',
  },
  {
    title: `Write a blogpost "7 best strategies for SEO in 2020"`,
    time: '5:00',
    board: 'Scheduled',
    label: '#FEC6B7',
  },
  {
    title: `New Ad copies for Manamaja`,
    time: '2:00',
    board: 'Scheduled',
    label: '#D9E6A2',
  },
  {
    title: `Check email`,
    time: '2:00',
    board: 'In progress',
    label: '#FFDFBA',
  },
  {
    title: `Record a video comment about last week's analytics report`,
    time: '0:20',
    board: 'In progress',
    label: '#F2BAE1',
  },
  {
    title: `Process all resumes for Content Marketer position`,
    time: '1:00',
    board: 'In progress',
    label: '#FFDFBA',
  },
  {
    title: `Check email`,
    time: '0:20',
    board: 'Completed',
    label: '#F0F0F0',
  },
  {
    title: `Weekly planning session`,
    time: '0:45',
    board: 'Completed',
    label: '#F0F0F0',
  },
  {
    title: `Create 5+ target audiences in Facebook for Samsung ...`,
    time: '2:30',
    board: 'Completed',
    label: '#F0F0F0',
  },
  {
    title: `Check FB Banner Design and give feedback`,
    time: '0:20',
    board: 'Completed',
    label: '#F0F0F0',
  },
  {
    title: `Check email`,
    time: '0:20',
    board: 'Completed',
    label: '#F0F0F0',
  },
]

const boards = [...new Set(tasks.map((task) => task.board))]

const KanbanBoard = ({ board, tasks, numberOfTasks }) => {
  return (
    <KanbanBoardWrapper>
      <KanbanBoardHeader>
        <div>{board}</div>
        {tasks && <NumberOfTasks>{numberOfTasks}</NumberOfTasks>}
      </KanbanBoardHeader>
      <TasksWrapper>
        {tasks?.map((task, index) => {
          return <Task {...task} key={index} />
        })}
      </TasksWrapper>
    </KanbanBoardWrapper>
  )
}

const Kanban = () => {
  return (
    <KanbanWrapper>
      {boards.map((board) => {
        return (
          <KanbanBoard
            board={board}
            tasks={tasks.filter((task) => task.board === board)}
            numberOfTasks={tasks.filter((task) => task.board === board).length}
            key={board}
          />
        )
      })}
      <NewBoard>
        <NewBoardHeader>
          <PlusIcon />
          <div>Create status</div>
        </NewBoardHeader>
      </NewBoard>
    </KanbanWrapper>
  )
}

const KanbanWrapper = styled.div`
  display: flex;
  padding-left: 10px;
`

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
