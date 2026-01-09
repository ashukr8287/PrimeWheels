import React from 'react'

function VehicleImageList({vehicle}) {
  return (
    <div>
        <img src={vehicle.images} alt="" className='rounded-2xl' />
    </div>
  )
}

export default VehicleImageList