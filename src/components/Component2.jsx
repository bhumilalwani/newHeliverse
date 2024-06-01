import React from 'react'

const Component2 = (props) => {
  return (
    <div className={`${props.compo} md:flex md:gap-5 `}>
      <h1 className={`${props.className} text-center my1:text-left md:w-[20%]`}>Attract Your Visitors Attention With Colorful <span className='font-sans bg-gradient-to-r from-orange-500 from-30% via-purple-500 to-purple-700 bg-clip-text text-transparent text-4xl'>Motion Art Effect</span></h1>
      <p className='text-[#A09BB0] text-[16px] font-sans font-semibold w-[95%] text-center my1:text-left md:w-[40%] ml-[50%] -translate-x-[50%] my1:ml-0 my1:-translate-x-0 mt-[5vh]'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</p>
    </div>
  )
}

export default Component2
