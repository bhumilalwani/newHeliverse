import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-[rgb(38,38,38)] w-full px-4 py-2'>
    <NavLink to='/home' className={'text-white flex items-center text-xl font-bold'} ><img src="/images/motionarteffect-img2.png" className='w-[45px] h-[45px]' alt=""/>envato<span className='text-[#7AA93C] font-normal'>market</span></NavLink>
      <button className='bg-[#7AA93C] text-[#EEE5FF] rounded-[5px] px-3 py-2'>Buy Now</button>
    </div>
  )
}

export default Nav
