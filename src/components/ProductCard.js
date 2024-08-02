import React from 'react';

// ProductCard component for displaying individual product details
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
