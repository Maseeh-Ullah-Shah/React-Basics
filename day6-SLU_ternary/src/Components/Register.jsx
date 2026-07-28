import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
        name:"",
        email:"",
        password:""
    });
  };

  return (
    <div className="bg-white w-80 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          required
          value={formData.name}
          onChange={handleChange}
          name="name"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          required
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          required
          value={formData.password}
          onChange={handleChange}
          name="password"
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 bg-blue-600 text-white rounded cursor-pointer">
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
