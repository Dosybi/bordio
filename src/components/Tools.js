import styled from 'styled-components'

import { ReactComponent as RoadmapIcon } from '../assets/icons/Roadmap.svg'
import { ReactComponent as ScheduleIcon } from '../assets/icons/Schedule.svg'
import { ReactComponent as TasksIcon } from '../assets/icons/Tasks.svg'
import { ReactComponent as NotesIcon } from '../assets/icons/Notes.svg'
import { ReactComponent as FilesIcon } from '../assets/icons/Files.svg'

const toolsData = {
  title: 'Tools',
  tools: [
    {
      label: 'Roadmap',
      icon: <RoadmapIcon />,
    },
    {
      label: 'Schedule',
      icon: <ScheduleIcon />,
      isActive: true,
    },
    {
      label: 'Tasks',
      icon: <TasksIcon />,
    },
    {
      label: 'Notes',
      icon: <NotesIcon />,
    },
    {
      label: 'Files',
      icon: <FilesIcon />,
    },
  ],
}

const Tool = ({ label, icon, isActive }) => {
  return (
    <ToolWrapper isActive={isActive}>
      {isActive && <ActiveToolLabel />}
      <ToolIcon>{icon}</ToolIcon>
      <div>{label}</div>
    </ToolWrapper>
  )
}

const Tools = () => {
  return (
    <ToolsWrapper>
      <ToolsTitle>{toolsData.title}</ToolsTitle>
      {toolsData.tools.map((tool) => {
        return <Tool {...tool} key={tool.label} />
      })}
    </ToolsWrapper>
  )
}

const ToolsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f8fa;
  height: 100wh;
`

const ToolsTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  padding-left: 16px;
  padding-top: 24px;
  margin-bottom: 26px;
`

const ToolWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 11px 30px 11px 10px;
  margin-right: 16px;
  cursor: ${(props) => (props.isActive ? 'auto' : 'pointer')};
  color: ${(props) => (props.isActive ? '#0094FF' : '#222222')};
  background: ${(props) => (props.isActive ? '#fff' : '')};
  border-radius: ${(props) => (props.isActive ? '0px 8px 8px 0px' : '')};
  &:hover {
    background: #fff;
    border-radius: 0px 8px 8px 0px;
  }
`

const ActiveToolLabel = styled.div`
  background: #0094ff;
  position: absolute;
  width: 4.12px;
  height: 50px;
  left: 0px;
  border-radius: 0px 10px 10px 0px;
`

const ToolIcon = styled.div`
  margin-right: 10px;
`

export default Tools
