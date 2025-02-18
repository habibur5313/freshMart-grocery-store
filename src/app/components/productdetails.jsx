'use client'
import React from "react";

const ProductDetails = ({ product,user }) => {
                    
 const handleCart = (id) => {
                    alert('add to cart functionality coming soon')
                    
 }                   
  return (
    <div className="max-w-2xl mx-auto border p-4">
      <img
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] "
        src={product.img}
        alt={product.name}
      />
      <div className="md:m-4 sm:m-2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium">{product.quantity}</p>
          <p className="text-xl font-medium">${product.price}</p>
        </div>
        <p className="text-xl">{product.description}</p>
        <div className="flex justify-end">
          <button onClick={() => handleCart(product._id)} className="py-2 px-3 border rounded-xl bg-orange-500 text-white text-xl font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
