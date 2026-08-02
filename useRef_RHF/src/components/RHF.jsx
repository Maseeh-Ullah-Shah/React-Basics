import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
    console.log("RHF rendering......."); 
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();   //This is a function which contain a normal javascript function and return an object of these function when we call useform.


  const formSubmit =(data)=>{
    console.log(data);
    reset();
    }
  return (
    <div className="w-80 bg-white  rounded-2xl p-4">
      REACT HOOK FORM
      <form 
      onSubmit={handleSubmit(formSubmit)}
      action="" className="flex flex-col gap-4">
        <input
        {...register("poductName")}
          className="p-2 border rounded-xl"
          type="text"
          placeholder="Product Name"
        />
        <input
         {...register("price")}
          className="p-2 border rounded-xl"
          type="text"
          placeholder="Price"
        />
        <input
         {...register("category")}
          className="p-2 border rounded-xl"
          type="text"
          placeholder="Category"
        />
        <input
         {...register("image")}
          className="p-2 border rounded-xl"
          type="text"
          placeholder="Image"
        />
        <button className="p-2 border rounded-xl bg-blue-600 text-white">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default RHF;
