import React from 'react'

const Component4 = (props) => {
  return (
    <div className='flex items-center gap-4'>
      <img src={`${props.image}`} alt="" />
      <div>
        <img src="./images/motionarteffect-img4.png" alt="" />
        <h2 className='text-white'>4.5 Score, 9 Reviews</h2>
      </div>
    </div>
  )
}

export default Component4
