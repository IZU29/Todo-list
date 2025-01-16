import React from 'react'
import Sidebar from './SIdebar'
import Content from './Content'
const Main = () => {
  const [task , setTask] = React.useState({})
  console.log(task)
  return (
    <div className="flex h-5/6">
        <Sidebar 
        task = {task}
        setTask = {setTask}
        />
        <Content
        task = {task}
        setTask = {setTask}
        />
    </div>
  )
}

export default Main