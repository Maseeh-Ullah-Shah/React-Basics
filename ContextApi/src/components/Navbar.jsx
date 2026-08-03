import React from "react";
import { useContext } from "react";
import {MyShop} from "../context/MyWebsite";
const Navbar = () => {
  const { setToggle } = useContext(MyShop);
  return (
    <div className="flex bg-black text-white p-4 justify-between items-center rounded-xl">
      <div>
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1713646778050-2213b4140e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="flex gap-6 ">
        <p
          onClick={() => setToggle(true)}
          className="hover:text-blue-600 cursor-pointer"
        >
          Home
        </p>
        <p
          onClick={() => {
            setToggle(false);
          }}
          className="hover:text-blue-600 cursor-pointer"
        >
          Cart
        </p>
      </div>
      <button className="cursor-pointer font-semibold">Login</button>
    </div>
  );
};

export default Navbar;
