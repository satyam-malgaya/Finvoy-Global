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
            img:'https://www.vinayakafinserv.com/media/images/17777592_Npm084m.png',
            h1:'Wealth Management'
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
            img:'https://www.vinayakafinserv.com/media/images/4318299_E9eyDE1.png',
            h1:'Credit Solutions'
        },
        
    ]
        
    
  return (
    <div className='w-full h-[80vh] '>
       <div className='w-full h-50 flex justify-center items-center flex-col '>
        <h1 className='text-[35px] font-medium tracking-[1px]'>Our Offerings</h1>
        <p className='text-[18px] tracking-[0.5px]'>Explore our hassle-free Loan & Finance Solutions tailored to your needs</p>
       </div>
       <div className='w-full h-60 bg-blue-600 flex items-center justify-center gap-25'>
        {
            cardata.map((item,index)=>{
          return <div key={index} className=''>
              <div className='w-25 rounded-full h-25 border-1 flex items-center justify-center border-[#E9ECEF]'>
                <img className='w-15 h-15' src={item.img} alt="Sorry the image is not show" />
              </div>
          </div>
            })
        }
       </div>
    </div>
  )
}

export default OurOfferings
