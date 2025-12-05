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
    <div className="w-full pt-16">
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
              sm:min-h-[45vh]   
              md:min-h-[70vh] 
              lg:min-h-[80vh]
            "
            style={{ backgroundImage: `url(${s.url})` }}
          > 
           
  
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
  
  );
}
