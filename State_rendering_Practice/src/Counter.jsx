import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("counter is rendering......");
  return (
    <div>
      <h1>Count is -{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => {
            console.log(prev);
            return prev + 1;
          });
        }}
        className="bg-green-500 rounded-md p-2 text-semibold "
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
