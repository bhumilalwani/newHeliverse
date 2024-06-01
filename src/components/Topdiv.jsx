import React from 'react'
import {Link} from 'react-router-dom'

const Topdiv = () => {
  return (
    <div className='flex justify-between mt-6 p-4 mx-1 w-[100%] '>
      <Link to='/'><img className='w-[20vw] min-w-[25vw] max-w-[28vw] max-h-[10vh]' src="/images/MotionArtEffect-logo.png" alt="" /></Link>
      <button className='hidden lg:block bg-[#FFFFFF] text-[#0E0F1A] px-6 py-3 rounded-[5px] font-normal text-normal hover:bg-transparent hover:text-white hover:border-[2px] '>Purchase Now</button>
    </div>
  )
}

export default Topdiv
