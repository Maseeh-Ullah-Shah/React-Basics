import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  console.log("App is rendering....")
  const { isCartOpen, cartItems } = useContext(MyStore);
  const [productsData, setProductsData] = useState([]);
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      //  console.log(res.data)
      setProductsData(res.data);

      //With the help of fetch you can get data
      // let res = await fetch("https://fakestoreapi.com/products");
      // let product = await res.json();
      // console.log(product)
    } catch (error) {
      console.log("error in api", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  console.log(productsData);
  return (
    <div className="h-screen p-2 bg-pink-100 flex flex-col gap-2">
      <Navbar />

      {isCartOpen ? (
        <div className="h-screen ">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {productsData.map((product) => {
            let isInCart = cartItems.find((val) => val.id === product.id);
            // console.log(isInCart);
            return <ProductCards
              key={product.id}
              product={product}
              isInCart = {isInCart}
            />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
