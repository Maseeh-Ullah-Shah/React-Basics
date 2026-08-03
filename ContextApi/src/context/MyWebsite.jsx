import { useState } from "react";
import { createContext } from "react";

export const MyShop = createContext();

export const MyShopContextProvider = ({children})=>{

  const [addCart, setAddCart] = useState([]);
  const [toggle, setToggle] = useState(true);
    return <MyShop.Provider value={{addCart,setAddCart,toggle,setToggle}}>
        {children}
    </MyShop.Provider>
}