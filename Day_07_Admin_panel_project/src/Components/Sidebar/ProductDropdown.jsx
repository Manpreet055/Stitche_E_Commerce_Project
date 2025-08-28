import React from 'react'
import Dropdown from './Dropdown'
import {ShoppingBag, ChartBarStacked, Grid,PackagePlus } from 'lucide-react'

const ProductDropdown = () => {
    let dropDownArray = [{
        name:"All Products",
        route:"/products",
        icon:<Grid/>
    },
    {
        name:"Add Product",
        route:"products/add",
        icon:<PackagePlus/>
    },
    {
        name:"Categories",
        route:"products/categories",
        icon:<ChartBarStacked/>
    },
    ]
  return (
    <div className='w-full sidebar-links'> 
      < Dropdown items={dropDownArray} buttonName='Products' buttonIcon={<ShoppingBag/>}/>
    </div>
  )
}

export default ProductDropdown