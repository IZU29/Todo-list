import React from 'react'
import Calender from './Calender'
import Task from './Task'
const Content = ({task , setTask}) => {
  return (
    <div className="border border-red-500 w-3/4 flex">
        <Task 
        task = {task}
        setTask = {setTask}/>
        <Calender />
    </div>
  )
}

export default Content