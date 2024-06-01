import React from 'react'

const Component8 = (props) => {
  return (
    <div id={props.id} className={`${props.className} text-left px-[0vw] py-[5vh] bg-gradient-to-b from-[rgb(14,7,32)] to-[#241D34] rounded-xl w-full lg:h-fit shadow-slate-600 z-50 relative shadow-inner border-solid border-x-[1px] border-[#FFFFFF10] shadow-md border-y-[1px] mt-[3vh] ml-[50%] -translate-x-[50%] text-center px-4 py-4`}>
      <img className='mb-[3vh]' src={props.image} alt="" />
      <h2 className='text-[#E8DFF9] ml-[10%] text-left font-bold text-[25px] mb-[2vh]'>{props.heading}</h2>
      <p className='text-[#A8A0B9] font-semibold ml-[10%] text-left'>{props.para}</p>
    </div>
  )
}

export default Component8
