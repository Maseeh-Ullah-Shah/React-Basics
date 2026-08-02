import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <div className="p-4 flex items-center justify-between bg-black rounded-xl text-white">
      <div>
        <img
          className=" w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
      onClick={()=>setToggle((prev=>!prev))}
      className="p-2 bg-blue-700 text-white rounded-xl cursor-pointer">
        Create user
      </button>
    </div>
  );
};

export default Navbar;
