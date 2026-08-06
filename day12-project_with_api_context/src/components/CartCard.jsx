import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center gap-5 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">

      {/* Product Image */}
      <div className="w-28 h-28 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1 capitalize">
          {product.category}
        </p>

        <p className="text-xl font-bold text-green-600 mt-3">
          ${product.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded bg-gray-200 hover:bg-gray-300 text-xl">
          -
        </button>

        <span className="text-lg font-semibold">
          {product.quantity}
        </span>

        <button className="w-9 h-9 rounded bg-gray-200 hover:bg-gray-300 text-xl">
          +
        </button>
      </div>

      {/* Total */}
      <div className="w-28 text-center">
        <p className="text-sm text-gray-500">Total</p>

        <p className="text-xl font-bold">
          ${product.price}
        </p>
      </div>

      {/* Remove */}
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
        Remove
      </button>

    </div>
  );
};

export default CartCard;