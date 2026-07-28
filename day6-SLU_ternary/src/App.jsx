import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useState } from "react";
const App = () => {
  const [toggle, setToggle] = useState(false);

  // function handleToggle() {
  //   setToggle((prev)=> !prev);
  // }
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
