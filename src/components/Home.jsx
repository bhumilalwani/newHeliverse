import React from 'react'
import Topdiv from './Topdiv.jsx'
import Component1 from './Component1.jsx'
import Component2 from './Component2.jsx'
import Component3 from './Component3.jsx'
import Component4 from './Component4.jsx'
import Component5 from './Component5.jsx'
import Component6 from './Component6.jsx'
import Component7 from './Component7.jsx'
import Component8 from './Component8.jsx'
import Component9 from './Component9.jsx'


const Home = () => {
    const compos=[
        {id:1,image:'./images/motionarteffect-img2.png'},
        {id:2,image:'./images/motionarteffect-img1.png'},
        {id:3,image:'./images/motionarteffect-img3.png'}
    ]
    const compos6=[
        {id:1,heading:'Apply On selection', para:'Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.',image:"./images/motionarteffect-img11.png"},
        {id:2,heading:'Apply On Page', para:'Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.', image:"./images/motionarteffect-img10.png"},
        {id:3,heading:'Supported by All Popular Browsers', para:'Rest assured, Motion Art is designed to be compatible with all major web browsers.', image:"./images/motionarteffect-img8.png"}
    ]
    const compos8=[
        {id:1,heading:'Light Weight', para:'Motion Art for Elementor is designed to be lightweight.',image:"./images/motionarteffect-img9.png"},
        {id:2,heading:'100% Responsive', para:'Create a consistent visual experience across all devices.', image:"./images/motionarteffect-img6.png"},
        {id:3,heading:'User Friendly Interface', para:'Ensure a smooth experience for both applicants and administrators.', image:"./images/motionarteffect-img7.png"}

    ]
  return (
    <div className="w-[100%]">
      <Topdiv></Topdiv>
      <div className='my1:flex my1:items-center flex-row gap-[15vw] w-[100%] px-[5vw]'>
      <Component1 className="mt-[10vh]"></Component1>
      <Component2 className="font-sans text-white text-4xl text-semibold text-center md:text-left mt-10" compo=""></Component2>
      </div>  <Component3></Component3>
        <div className='flex flex-col gap-8 items-center mt-10'>
           
            {
                compos.map(( compo)=>{
                    return <Component4 key={compo.id} image={compo.image}></Component4>
                })
            }
        </div>
        <Component5></Component5>
        <div className='mt-[10vh]'>
            {compos6.map((compo)=>{return <Component6 key={compo.id} id={compo.id} image={compo.image} heading={compo.heading} para={compo.para}></Component6>})}
            </div>
            <Component7></Component7>
            <div className='lg:grid'>
                {compos8.map((compo, index)=>{return <Component8 key={compo.id} image={compo.image} id={compo.id} heading={compo.heading} para={compo.para} className={ index===2 ? "lg:col-span-2" : "" }></Component8>})}
            </div>
            <Component9></Component9>
    </div>
  )
}

export default Home
