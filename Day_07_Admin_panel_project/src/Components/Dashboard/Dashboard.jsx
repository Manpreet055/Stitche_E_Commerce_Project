import React from 'react'
import Charts from './Charts'
import OverviewCard from './OverviewCard'
import CountUp from "react-countup";

const Dashboard = () => {
  return (
    <div className=' w-full p-4 py-6 h-screen overflow-scroll scrollbar-hidden '>
      <h2 className='text-4xl font-medium mb-6'>Dashboard</h2>
<div className='w-full flex flex-wrap justify-between'>
        <OverviewCard number="2388" title="Total Revenue"/>
        <OverviewCard number="1590" title="Sales"/>
        <OverviewCard number="4568" title="Visits"/>
        <OverviewCard number="2056" title="Orders"/>

  </div>  
      <Charts />
      </div>
  )
}

export default Dashboard