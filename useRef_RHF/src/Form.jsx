import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Form = () => {
  console.log("Form Rendering.....");
  // const [formData, setFormData] = useState({});
  const formRef = useRef({}); //jab aik sa zayada value store karne ho to tab object pass karna padega 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.productName.value);
    console.log(formRef.current.category.value);
    console.log(formRef.current.price.value);
    console.log(formRef.current.image.value);
  };

  return (
    <div className="w-80 bg-white  rounded-2xl p-4">
      <form 
      onSubmit={handleSubmit}
      action="" className="flex flex-col gap-4">
        <input
        ref={(e)=>formRef.current.productName = e}
          className="p-2 border rounded-xl"
          type="text"
          placeholder="Product Name"
        />
        <input
        ref={(e)=>formRef.current.price = e}
          className="p-2 border rounded-xl"
          type="text"
          placeholder="Price"
        />
        <span>Select category:</span>
        <select
        ref={(e)=>formRef.current.category = e}
        className="p-2 border rounded-xl" name="" id="">
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
        ref={(e)=>formRef.current.image = e}
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

export default Form;
