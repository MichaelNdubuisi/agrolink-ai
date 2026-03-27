// src/pages/Marketplace.jsx
import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Tomatoes",
    price: 5000,
    image: "https://source.unsplash.com/400x300/?tomatoes",
  },
  {
    name: "Rice",
    price: 25000,
    image: "https://source.unsplash.com/400x300/?rice",
  },
];

const Marketplace = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
};

export default Marketplace;