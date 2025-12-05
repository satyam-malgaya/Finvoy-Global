import React from 'react'

const OurOfferings = () => {
    const cardata=[
      {
        img:'https://www.vinayakafinserv.com/media/images/6342151_adwtPrZ.png',
        h1:'Loans'
      },
      {
        img:'https://www.vinayakafinserv.com/media/images/7132298_685ueiQ.png',
        h1:'Investments'
      },
      {
        img:'https://www.vinayakafinserv.com/media/images/4318299_E9eyDE1.png',
        h1:'Credit Solutions'
      },
      {
        img:'https://www.vinayakafinserv.com/media/images/6454277_BFIQeHB.png',
        h1:'Financial Advisory'
      },
      {
        img:'https://www.vinayakafinserv.com/media/images/2711725-200_J21uCYO.png',
        h1:'Tax & Retirement Planning'
      },
      {
       
         img:'https://www.vinayakafinserv.com/media/images/17777592_Npm084m.png',
        h1:'Wealth Management'
      }
        
    ]
        
    
  return (
  <div className="w-full py-5">
      <div className="w-full flex pb-5 flex-col items-center justify-center text-center gap-2 px-4">
        <h1 className="text-2xl font-medium tracking-[1px] sm:text-[32px]">
          Our Offerings
        </h1>
        <p className="text-sm tracking-[0.5px] text-gray-700 sm:text-[16px] max-w-2xl">
          Explore our hassle-free Loan & Finance Solutions tailored to your needs
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 w-full  items-center justify-center gap-6 px-4 sm:gap-8 sm:px-6 lg:gap-10 lg:px-10">
        {cardata.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-5 text-center"
            >
              <div className="card flex lg:h-28 lg:w-28 items-center justify-center rounded-full border border-[#E9ECEF] bg-white shadow-sm sm:h-33 sm:w-28">
                <img
                  className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                  src={item.img}
                  alt="Sorry the image is not show"
                />
              </div>
              <div className="flex items-center text-center">
                <p className="text-sm sm:text-base">{item.h1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default OurOfferings
