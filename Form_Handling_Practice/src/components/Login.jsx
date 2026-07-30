import React from "react";

const Login = ({setToggle}) => {
  return (
    <div className="bg-white flex flex-col gap-4 w-90 p-5 rounded-lg">
        <h1>Login</h1>
      <form className="flex flex-col gap-4 rounded">
        <input className="p-2 border border-gray-400 rounded" type="text" placeholder="Email" />
        <input className="p-2 border border-gray-400 rounded" type="text" placeholder="Password" />
        <button className="p-2 bg-blue-600 rounded-lg text-white">Login</button>
      </form>
      <p>
        Didn't have an Account? <span onClick={()=>setToggle(prev=>!prev)}
         className="text-blue-600 cursor-pointer">Register here</span>
      </p>
    </div>
  );
};

export default Login;
