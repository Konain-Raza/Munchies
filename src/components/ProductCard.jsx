import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100 border rounded-lg shadow-lg p-4 dark:bg-gray-800 transition-transform duration-200 hover:shadow-xl hover:scale-105 transform-gpu relative overflow-hidden">
      <img
          loading="lazy"
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-56 object-contain rounded-t-lg"
      />
      <div className="absolute inset-0  rounded-t-lg"></div>
      <div className="p-4 relative z-10">
        <h2 className="text-xl font-semibold mt-2 dark:text-white">
          {product.name}
        </h2>
        <p className="text-sm dark:text-gray-400">{product.category}</p>
        <p className="dark:text-gray-300 text-gray-600 mt-1">
          {product.description}
        </p>
        <p className="text-lg font-bold mt-2 dark:text-yellow-300 text-blue-600">
          {product.price} PKR
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
