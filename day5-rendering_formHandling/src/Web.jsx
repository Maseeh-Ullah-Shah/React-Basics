import React from 'react'
import {useState} from "react"
const Web = () => {
//1).Brute Force approach (jitne input hoge utni use state honge)
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

//2).Better Approach (Made an object of all releated property).useState() ma object ko use karo.
const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
});
//3).Optimized Approach(made a function for the repetitive code)
const handleClick = (e)=>{
    const {name,value} = e.target;
    setFormData(
        {
            ...formData,
            // [e.target.name] : e.target.value
            [name] : value
        }
    );
}
  return (
    <div className='flex flex-col gap-4 w-80 px-3 py-2'>
      <input 
        // onChange={(e)=>{
        //     // setName(e.target.value);
        //     setFormData({
        //         ...formData,
        //         name:e.target.value
        //     });
        //     }}
        onChange={handleClick}
         className='border-1 p-1 rounded-lg' type="text"placeholder='Name'name='name'/>
      <input 
        // onChange={(e)=>{
        //     // setEmail(e.target.value);
        //     setFormData({
        //         ...formData,
        //         email:e.target.value
        //     });
        //     }}
        onChange={handleClick}
         className='border-1 p-1 rounded-lg'
         type="text" 
         name='email'
         placeholder='Email'
      />
      <input 
        // onChange={(e)=>{
        //     // setPassword(e.target.value); 
        //     setFormData({
        //         ...formData,
        //         password:e.target.value
        //     });
        //     }}
        onChange={handleClick}
         className='border-1 p-1 rounded-lg'
         name='password'
         type="text" 
         placeholder='Password'
       />
      <button
         className='border-1 p-1 rounded-lg'
      >Submit</button>
      <h1>Hello - {formData.name}</h1>
      <h1>This is email - {formData.email}</h1>
      <h1>This is password - {formData.password}</h1>
    </div>
  )
}

export default Web
