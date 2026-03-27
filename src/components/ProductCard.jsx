// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} className="h-40 w-full object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">₦{product.price}</p>
      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;