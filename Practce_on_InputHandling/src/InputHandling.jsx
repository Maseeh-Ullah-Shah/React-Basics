import React from "react";
import { useState } from "react";

const InputHandling = () => {
  const [formData, setFormData] = useState({});
const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({ ...formData, [name]: e.target.value })}
    console.log(formData);
  return (
    <div className="flex flex-col gap-5 p-2 rounded w-80 bg-white">
      <input
      name="name"
        onChange={handleChange}
        className=" border-2 p-2 rounded outline-none"
        type="text"
        placeholder="Name"
      />
      <input
      name="email"
        onChange={handleChange}
        className=" border-2 p-2 rounded outline-none"
        type="text"
        placeholder="Email"
      />
      <input
      name="password"
        onChange={handleChange}
        className="border-2 p-2 rounded outline-none"
        type="text"
        placeholder="Password"
      />
      <button className="border-2 p-2 rounded">Submit</button>
      <h1>This is Name : {formData.name}</h1>
      <h1>This is Email :{formData.email}</h1>
      <h1>This is Password :{formData.password}</h1>
    </div>
  );
};

export default InputHandling;
