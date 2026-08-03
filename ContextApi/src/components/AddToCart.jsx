import React from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const AddToCart = ({ removeFromCart }) => {
    const {addCart} = useContext(MyShop);
  const totalPrice = addCart.reduce(
    (total, item) => total + item.price,
    0
  );
  if (addCart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md">
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingCart size={80} className="text-gray-300" />

          <h1 className="text-3xl font-bold mt-5">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-3">
            Add some products to your shopping cart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 px-5">
      <h1 className="text-4xl font-bold mb-8">
        My Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Section */}

        <div className="lg:col-span-2 space-y-5">

          {addCart.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 bg-white shadow-md rounded-xl p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 object-cover rounded-lg"
              />

              <div className="flex flex-col flex-1">

                <h2 className="text-2xl font-semibold">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Product ID : #{item.id}
                </p>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-auto">

                  <span className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Right Section */}

        <div className="bg-white rounded-xl shadow-md h-fit p-6 sticky top-24">

          <h2 className="text-2xl font-bold border-b pb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mt-5">
            <span>Total Items</span>
            <span>{addCart.length}</span>
          </div>

          <div className="flex justify-between mt-3">
            <span>Total Price</span>
            <span className="font-bold text-green-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default AddToCart;
