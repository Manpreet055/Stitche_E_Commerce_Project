import React from 'react'

const MobileSidebar = () => {
  return (
    <div><button onClick={()=>SetSidebarOpen(true)} className="absolute top-2 left-4 bg-[#f0f0f0] p-2">
          <Menu size={30} />
        </button>
        <button onClick={()=>SetSidebarOpen(false)} className=" lg:hidden absolute top-0 left-72 bg-[#f0f0f0] p-2 lg:left-80">
          <X size={30} />
        </button></div>
  )
}

export default MobileSidebar