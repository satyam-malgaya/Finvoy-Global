import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function HomeSlider({ slide = [], }) {

  const navigate = useNavigate()
  return (
    <div className="w-full">
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
      navigation={false}
      loop={true}
      slidesPerView={1}
      className="h-full"
    >
      {slide.map((s, i) => (
        <SwiperSlide key={i}>
          <div
            className="
              w-full 
              bg-cover bg-center 
              flex 
              items-center 
              justify-start
              p-5 
              sm:p-10
              min-h-[40vh]       
              sm:min-h-[55vh]   
              md:min-h-[70vh] 
              lg:min-h-[80vh]
            "
            style={{ backgroundImage: `url(${s.url})` }}
          > 
            <div
              className="
                w-[70%] sm:w-[50%] md:w-[40%]
                h-full 
                bg-black/50 
                backdrop-blur-sm
                p-5 sm:p-8 
                rounded-lg
                flex flex-col gap-4
              "
            >
              <h2
                className="
                  text-white font-bold drop-shadow-xl
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                "
              >
                {s.title}
              </h2>
              <button
                onClick={()=>{
                 navigate('/contact')
                }}
                className="
                hover:-translate-y-1 transform outline-none duration-300 ease-out
                  w-fit 
                  px-5 py-2 
                 text-black 
                  font-semibold 
                  rounded-md
                  shadow-lg 
                  hover:bg-[#170C69] 
                  transition
                  bg-[#fff]
                  border-none 
                  outline-none
                  
                "
              >
                Contact Us
              </button>
            </div>
  
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  
  );
}
