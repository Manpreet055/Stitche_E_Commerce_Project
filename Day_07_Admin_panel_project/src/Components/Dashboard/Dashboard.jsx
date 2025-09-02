import React from 'react'
import SalesOverview from './SalesOverview'
import OverviewCard from './OverviewCard'
import Analytics from './Analytics'
import Revenue from './Revenue'

const Dashboard = () => {
  return (
    <div className=' w-full lg:p-4 py-6 h-screen overflow-scroll scrollbar-hidden '>
      <h2 className='text-4xl font-medium mb-6'>Dashboard</h2>
<div className='w-full flex gap-8 flex-wrap justify-between'>
        <OverviewCard number="2388" title="Total Revenue"/>
        <OverviewCard number="1590" title="Sales"/>
        <OverviewCard number="4568" title="Visits"/>
        <OverviewCard number="2056" title="Orders"/>

  </div>  
  <div className='flex flex-wrap grow w-full justify-between'>
          <SalesOverview />
          <Analytics/>
  </div>
  <Revenue/>
      </div>
  )
}

export default Dashboard