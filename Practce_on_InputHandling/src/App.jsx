import React from 'react'
import { useState } from 'react'

const App = () => {
const [count, setCount] = useState(0);
  const [user, setUser] = useState({name:"Habeeba Hameed"});
  console.log("App rendering");
  let handleClick = ()=>{
    setUser({name:"Baman"});
    setUser({age:23});

  };
  return (
    <div>
      <h1>Hey data is rendering.......</h1>
      <p>Count is - {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>User is - {user.name}</h2>
      <button onClick={handleClick}>Change user</button>
    </div>
  )
}

export default App
