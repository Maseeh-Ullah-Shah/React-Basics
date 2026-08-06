import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
    const { cartItems } = useContext(MyStore);
  return (
    <div className="h-[95%] grid grid-cols-5 gap-6"> 
      {cartItems.map((elem) => (
        <CartCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default CartScreen;
