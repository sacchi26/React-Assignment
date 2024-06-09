import React from 'react'

const Navbar = () => {
  return (
    
    <div className="flex  justify-evenly  bg-red-700 text-white p-4 " >
      <div className='flex gap-10'  >
        <div className='flex gap-2 items-center'>
        <i class="fa-solid fa-location-dot"></i> 
        <p>ship to 46200</p>
        </div>
        <div className='flex  gap-2' >
        <i class="fa-solid fa-boxes-packing"></i>
        <p>select your store</p>
        </div>
        </div>
        <div className='flex  gap-10'>
            <p>Target Circle™</p>
            <p>Target Circle™ Card</p>
            <p>Target Circle 360™</p>
            <p>Registry</p>
            <p>Weekly Add</p>
            <p>Find Stores</p>
        </div>
    </div>
    
    
  )
}

export default Navbar
