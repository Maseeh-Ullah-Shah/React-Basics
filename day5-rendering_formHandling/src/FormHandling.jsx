import React from 'react'
import { useState } from 'react';
const FormHandling = () => {
    console.log("App Rendering");

    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        name:"Aman"
    });


  return (
    <div className='p-5'>
     <h1>Hello count is - {count}</h1>
     <h1>Hello name is - {user.name}</h1>
      <button
         onClick={()=>{
            setCount(count + 1);
        }}
         >
            Increment</button>
      <button
         onClick={()=>{
            user.name = "Baman";
        }}
        >
            ChangeName</button>
    </div>
  )
}

export default FormHandling
