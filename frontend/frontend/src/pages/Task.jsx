import React from 'react'

const Task = ({task , setTask}) => {
  return (
    <div className="w-3/4 border border-green-500">
    <div className="border border-black w-3/4">Id: {task._id}</div>
    <div className="border border-black w-3/4">Task: {task.task}</div>
    <div className="border border-black w-3/4">Status: {task.completed ? "Completed" : "Not-Done"}</div>
    </div>
  )
}

export default Task