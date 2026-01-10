import React from 'react'

function VehicleImageList({vehicle}) {
  return (
    <div className=''>
        <img src={vehicle.images} alt="" className='rounded-2xl' />
    </div>
  )
}

export default VehicleImageList