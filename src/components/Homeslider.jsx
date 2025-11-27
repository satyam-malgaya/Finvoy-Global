import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeSlider({ slide = [], }) {
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
            "
            style={{ backgroundImage: `url(${s.url})` }}
          >
            <h2
              className="
                text-white font-bold drop-shadow-lg
                text-2xl     
                sm:text-3xl   
                md:text-4xl  
                lg:text-5xl
                max-w-[80%] 
              "
            >
              {s.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  );
}
