import React from 'react'

const Component6 = (props) => {
  return (
    <div id={props.id} className=' bg-gradient-to-b from-[rgb(14,7,32)] to-[#241D34] rounded-xl w-[95%] h-fit shadow-slate-600 z-50 relative shadow-inner border-solid border-x-[1px] border-[#FFFFFF10] shadow-md border-y-[1px] mt-[3vh] ml-[50%] -translate-x-[50%] text-center px-4 py-4'>
        <h2 className='font-sans text-slate-100 text-xl font-bold mt-[3vh] mb-[4vh]'>{props.heading}</h2>
        <p className='text-[#B1A9C3] leading-6 text-[16px] mt-[3vh] mb-[4vh] font-semibold'>{props.para}</p>
        <img className='mb-[2vh]' src={props.image} alt="" />
    </div>
  )
}

export default Component6
