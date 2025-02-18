"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fresh-mart-server.vercel.app/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
      {products.map((product) => (
          <div key={product._id}>
            <img className="w-full h-[320px] rounded-xl" src={product.img} alt="" />
            <div className="m-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex justify-between items-center">
                <p className="text-xl font-medium">{product.quantity}</p>
                <p className="text-xl font-medium">${product.price}</p>
              </div>
              <p className="text-xl">{product.description.slice(0, 100)}...</p>
              <div className="flex justify-end">
                <Link href={`/product/details/${product._id}`}>
                  <button className="py-2 px-3 border rounded-xl bg-orange-500 text-white text-xl font-medium">
                    view details
                  </button>
                </Link>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Products;
