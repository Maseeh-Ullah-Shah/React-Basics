import React, { useState } from 'react'

const App = () => {

let [count , setCount] = useState("Uzma Nasir");
console.log(count);

  return (
    <div>
      <h1>Name - {count}</h1>
      <button
       onClick={()=>{
      setCount("Alina");
      }}
       >
        Change Name -</button>
    </div>
  )
}

export default App
