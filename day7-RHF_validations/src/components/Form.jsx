import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Form = ({setUsers,setToggle}) => {
   
  console.log("React Hook Form rendering......");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({mode:"onChange"});    //default mode is => {mode:"onChange"}

  const formSubmit = (data) => {
    setUsers((prev)=>[...prev,data]);
    reset();
    setToggle((prev)=>!prev);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-between">
      <h1>Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-3 w-80 p-4 bg-gray-100 rounded-xl"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern:{
                value:/^\S+$/,
                message:"Blank spaces are not allowed"
            }
          })}
          className="p-2 outline-none border-1 rounded-xl"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#\$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
              message: "Please enter valid email",
            },
          })}
          className="p-2 outline-none border-1 rounded-xl"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Mobile number is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 20,
              message: "Maximum 20 digits are allowed",
            },
          })}
          className="p-2 outline-none border-1 rounded-xl"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="p-2 outline-none border-1 rounded-xl"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button 
        className="p-2 bg-blue-500 rounded-xl cursor-pointer">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;
