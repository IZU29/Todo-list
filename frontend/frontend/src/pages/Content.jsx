import React from 'react'
import Calender from './Calender'
import Task from './Task'
const Content = () => {
  return (
    <div className="border border-red-500 w-3/4 flex">
        <Task />
        <Calender />
    </div>
  )
}

export default Content