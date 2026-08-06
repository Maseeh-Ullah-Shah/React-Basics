import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const {setIsCartOpen} = useContext(MyStore);
  return (
    <div className="bg-black p-5 rounded-lg flex justify-between text-white items-center">
      <img
        className="w-12 h-12 rounded-full"
        src="https://plus.unsplash.com/premium_photo-1677852356095-51e64184cf25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcGluZyUyMGNhcnQlMjBsb2dvfGVufDB8fDB8fHww"
        alt=""
      />
      <div className="flex gap-6">
        <p
         onClick={()=>setIsCartOpen(false)}
        className="cursor-pointer hover:text-blue-500">Home</p>
        <p
        onClick={()=>setIsCartOpen(true)}
        className="cursor-pointer hover:text-blue-500">Cart</p>
      </div>
      <button className="px-4 py-2 bg-blue-600 rounded-lg cursor-pointer">
        Login
      </button>
    </div>
  );
};

export default Navbar;
