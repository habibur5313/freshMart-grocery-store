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
import Link from "next/link";

const MilkAndDrink = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fresh-mart-server.vercel.app/products?category=milkAndDrink").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-10">Milk & Drink</h1>
      <p className="font-medium text-center max-w-xl mx-auto mt-2 px-1">
      Milk provides essential nutrients like calcium and protein for bone and muscle health, while soft drinks offer a refreshing taste and quick energy boost but should be consumed in moderation. 🥛🥤
      </p>
      <div className="w-11/12 mx-auto mt-10 hidden lg:flex">
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
              <>
                <img
                  className="w-full rounded-xl"
                  src={product.img}
                  alt="product image"
                />
                <div className="m-4">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-medium">{product.quantity}</p>
                    <p className="text-xl font-medium">${product.price}</p>
                  </div>
                  <p className="text-xl">
                    {product.description.slice(0, 100)}...
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/product/details/${product._id}`}>
                      <button className="py-2 px-3 border rounded-xl bg-orange-500 text-white text-xl font-medium">
                        view details
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-11/12 mx-auto mt-10 hidden sm:flex lg:hidden">
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
              <>
                <img className="w-full rounded-xl" src={product.img} alt="" />
                <div className="m-4">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-medium">{product.quantity}</p>
                    <p className="text-xl font-medium">${product.price}</p>
                  </div>
                  <p className="text-xl">
                    {product.description.slice(0, 70)}...
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/product/details/${product._id}`}>
                      <button className="py-2 px-3 border rounded-xl bg-orange-500 text-white text-xl font-medium">
                        view details
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-11/12 mx-auto mt-10 sm:hidden">
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
              <>
                <img className="w-full rounded-xl" src={product.img} alt="" />
                <div className="m-4">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-medium">{product.quantity}</p>
                    <p className="text-xl font-medium">${product.price}</p>
                  </div>
                  <p className="text-xl">
                    {product.description.slice(0, 60)}...
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/product/details/${product._id}`}>
                      <button className="py-2 px-3 border rounded-xl bg-orange-500 text-white text-xl font-medium">
                        view details
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MilkAndDrink;
