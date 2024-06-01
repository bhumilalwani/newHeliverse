import React from 'react'

const Component1 = (props) => {
  return (
    <div className={`text-center flex flex-col ${props.className}`}>
      <span className="text-xl bg-gradient-to-r from-orange-600 from-45% via-purple-500 via-25% to-purple-800 to-30% text-transparent bg-clip-text">Transform Your</span>
      <span className='text-xl bg-gradient-to-r from-orange-600 from-30% via-purple-500 to-purple-800 text-transparent bg-clip-text'> Website</span>
      <h3 className='text-white mt-6 font-normal text-normal'>With Motion Art Effect</h3>
    </div>
  )
}

export default Component1
