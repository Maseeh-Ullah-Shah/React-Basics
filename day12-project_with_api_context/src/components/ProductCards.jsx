import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCards = ({ product, isInCart }) => {
  const { setCartItems, incrementQuantity, decrementQuantity } = useContext(MyStore);
  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product Added into cart");
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="h-56 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mb-2">
          {product.category}
        </span>

        <h2 className="font-semibold text-lg line-clamp-2 mb-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-3 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="text-sm text-yellow-500">
            ⭐ {product.rating.rate}
          </div>
        </div>
        {isInCart? (
          <button className="w-full bg-black text-white flex justify-center items-center rounded-lg gap-3">
            <span
              onClick={() => decrementQuantity(product.id)}
              className="text-4xl"
            >
              -
            </span>
            <span className="text-4xl">{isInCart.quantity}</span>
            <span
              onClick={() => incrementQuantity(product.id)}
              className="text-4xl"
            >
              +
            </span>
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
