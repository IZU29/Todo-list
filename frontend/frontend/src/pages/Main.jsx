import React from 'react'
import Sidebar from './SIdebar'
import Content from './Content'
const Main = () => {
  return (
    <div className="flex h-5/6">
        <Sidebar />
        <Content />
    </div>
  )
}

export default Main