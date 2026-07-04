import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
 
  // console.log(Object.is(count,count));
  return (
    <div>
      <h1>Counter-{count}</h1>
      <button
        className="bg-green-400 rounded-2xl p-2 cursor-pointer"
        onClick={() => {
          setCount(prev =>{
             console.log(prev);
             console.log(count);
             return prev + 1;
          });
          setCount(prev =>{
             console.log(prev);
             console.log(count);
             return prev + 1;
          });
          setCount(prev =>{
             console.log(prev);
             console.log(count);
             return prev + 1;
          });
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
