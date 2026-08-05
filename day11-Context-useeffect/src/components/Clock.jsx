import React, { useEffect, useState } from "react";

const Clock = () => {
    const [toggle, setToggle] = useState(true)
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    if(!toggle) return;
    let intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Hello");
    }, 1000);

    return ()=>{
        clearInterval(intervalId);
    }
  }, [toggle]);

  return (
    <div>
        <button onClick={()=>setToggle((prev)=>!prev)}>{toggle?"Show":"Hide"}</button>
      {
        // toggle?<h1>Current Time is ---{time}</h1>:""
        toggle && <h1>Current Time is ---{time}</h1>
      }
    </div>
  );
};

export default Clock;
