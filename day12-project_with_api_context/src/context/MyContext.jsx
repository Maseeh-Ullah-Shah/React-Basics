import { createContext, useState } from "react";

//consumer
export const MyStore = createContext();
//provider
export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id
          ? { ...val, quantity: val.quantity + 1 }
          : val;
      });
    });
  };
//Solution 1 (Simple)
//     const decrementQuantity = (id) => {
//     setCartItems((prev) => {
//       return prev.map((val) => {
//         return val.id === id
//           ? { ...val, quantity: val.quantity>0?val.quantity - 1:0 }
//           : val;
//       });
//     });
//   };

//Solution 2 (Professional React apps)
const decrementQuantity = (id)=>{
    setCartItems((prev=>
        prev.map((val)=>val.id === id ?{...val,quantity:val.quantity-1}:val).filter((elem)=>elem.quantity>0)
    ))
}
  console.log(cartItems);
  return (
    <MyStore.Provider
      value={{
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
