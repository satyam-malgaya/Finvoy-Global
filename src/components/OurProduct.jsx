import React from 'react'
import Cards from '../components/Cards.jsx'
import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

const OurProduct = () => {
  const [ishover, setishover] = useState(Array(3).fill(false));
  const arrowHandler = (index) => {
    const newstate = [...ishover];
    newstate[index] = true;
    setishover(newstate);
    // console.log("hover")
  };
  const arrowLeaveHandler = (index) => {
    const newstate = [...ishover];
    newstate[index] = false;
    setishover(newstate);
    // console.log('left')
  };

  const onMouseEnter=()=>{
    setishover(true)
  }
  const onMouseLeave=()=>{
    setishover(false)
  }
  return (
    <div className="w-full bg-white px-2 py-10 sm:px-10 sm:py-14 lg:px-20">
      <div className="w-full h-auto">
         <div className="w-full flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-3xl font-bold tracking-[1px] sm:text-[40px]">Explore our Products</h1>
            <p className="text-base font-medium text-[#777777] sm:text-[17px]">Discover easy, flexible, and transparent loan solutions designed to meet your financial needs</p>
         </div>
         <div className='w-full pt-10'>
            <Cards/>
         </div>
         <div
              onMouseEnter={()=>{arrowHandler(0)}}
              onMouseLeave={()=>{arrowLeaveHandler(0)}}
              className=" flex justify-center"
              >
            <button  className={`lg:w-40 sm:w-45 rounded-lg h-14 px-3 justify-center gap-2 text-[16px] text-white flex items-center ${ishover[0] ?'-translate-y-1 bg-[#0f0637]':'bg-[#170C52]'} transition duration-200 ease-out`}>Explore Mores <span><GoArrowUpRight className={`${ishover[0] ? 'rotate-45':''} transition duration-300`} size={20} /></span></button>
           </div>
      </div>
    </div>
  )
}

export default OurProduct
