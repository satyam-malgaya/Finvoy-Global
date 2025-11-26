import React from 'react'
import Cards from './Cards'

const OurProduct = () => {
  return (
    <div className="w-full bg-white px-5 py-10 sm:px-10 sm:py-14 lg:px-20">
      <div className="w-full h-auto">
         <div className="w-full flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-3xl font-bold tracking-[1px] sm:text-[40px]">Explore our Products</h1>
            <p className="text-base font-medium text-[#777777] sm:text-[17px]">Discover easy, flexible, and transparent loan solutions designed to meet your financial needs</p>
         </div>
         <div className='w-full pt-10'>
            <Cards/>
         </div>
      </div>
    </div>
  )
}

export default OurProduct
