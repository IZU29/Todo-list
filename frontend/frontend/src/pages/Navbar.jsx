import React from 'react'

const Navbar = () => {
  return (
    <div className="border border-red-600 flex justify-between h-[50px]">
     <div className="border border-green-500 text-[#001d3d] font-bold">T0D0</div> 
     {/* <div className="border border-black"></div> */}
     <div className="border border-blue-500">Username</div>
    </div>
  )
}

export default Navbar