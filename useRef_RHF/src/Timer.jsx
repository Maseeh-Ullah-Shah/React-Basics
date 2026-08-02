import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  
  const intervalIdRef = useRef(null);
  function startTime() {
    if(intervalIdRef.current) return;
    
    intervalIdRef.current = setInterval(() => {
      //   setTime(time + 1);
      setTime((time) => {
        return time + 1;
      });
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;  //this line is very necessary instead of this naya timer create hi nahi hoga kunki hume manually intervalidRef ko null karna padega.
  }

  function handleReset() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTime(0);
  }
  return (
    <div>
      <h1>Stopwatch : {time}</h1>
      <div className="flex gap-3 ">
        <button className="p-2 text-blue-900 bg-green-500 rounded-xl" onClick={startTime}>Start</button>
        <button className="p-2 text-blue-900 bg-green-500 rounded-xl" onClick={handleStop}>Stop</button>
        <button className="p-2 text-blue-900 bg-green-500 rounded-xl" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
