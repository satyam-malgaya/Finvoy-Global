import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/m-1.avif";
import img2 from "../assets/m-2.avif";
import img3 from "../assets/m-3.avif";

const slides = [
  { url: img1, title: "Affordable Home Loans", subtitle: "Low interest rates" },
  { url: img2, title: "Quick Approval", subtitle: "Fast and simple" },
  { url: img3, title: "Expert Guidance", subtitle: "Best loan advisors" },
];

export default function HomeSlider({height='75vh'}) {
  return (
    <div className="w-full" style={{ height }}>
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      slidesPerView={1}
      className="h-full"
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div
            className="w-full bg-cover bg-center flex items-center justify-start p-10"
            style={{ backgroundImage: `url(${s.url})`, height }}
          >
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              {s.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}
