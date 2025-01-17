import React from 'react'

const Task = ({task , setTask}) => {
  return (
    <div className="border border-black w-3/4">{task.task}</div>
  )
}

export default Task