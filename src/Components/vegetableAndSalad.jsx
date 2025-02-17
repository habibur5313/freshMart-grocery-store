"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const VegetableAndSalad = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products?category=vegetableAndsalad")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return (
    <>
    <div className="w-11/12 mx-auto mt-20 hidden lg:flex">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <img className="w-full" src={product.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="w-11/12 mx-auto mt-20 hidden sm:flex lg:hidden">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <img className="w-full" src={product.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="w-11/12 mx-auto mt-20 sm:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <img className="w-full" src={product.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default VegetableAndSalad;
