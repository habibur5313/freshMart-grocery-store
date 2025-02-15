'use client'
import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className=" ">
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/6BXsLnQ/image-14.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/ZYGJ3dF/image-13.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/PFmg4Cv/image-12.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/MydsxhD/image-11.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/jhtxpQR/image-10.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/G762ywq/image-15.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;