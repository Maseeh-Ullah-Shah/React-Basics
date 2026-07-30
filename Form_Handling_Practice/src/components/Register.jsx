import React from "react";
import { useState } from "react";

const Register = ({ setToggle ,setStudentsData}) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setStudentsData(prev=>[...prev,formData]);
    setFormData({
        name:"",email:"",password:"",imageUrl:""
    })
  }                                                                                        
  return (
    <div className="bg-white flex flex-col gap-4 w-90 p-5 rounded-lg">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}
       className="flex flex-col gap-4 rounded">
        <input required
        value={formData.name}
          name="name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input required
        value={formData.email}
          name="email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input required
        value={formData.password}
          name="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <input required
        value={formData.imageUrl}
          name="imageUrl"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="Image url"
        />
        <button className="p-2 bg-blue-600 rounded-lg text-white">
          Register
        </button>
      </form>
      <p>
        Already have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
