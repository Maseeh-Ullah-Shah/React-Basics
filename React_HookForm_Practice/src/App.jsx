import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
console.log("App rendering");
  function handleSubmit(e){
    e.preventDefault();
    console.log("Name :",name);
    console.log("Age :",age);
    console.log("Password :",password);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter name' />
      <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder='Enter age' />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password' />
      <button>Submit</button>
    </form>
    </>
  )
}

export default App
