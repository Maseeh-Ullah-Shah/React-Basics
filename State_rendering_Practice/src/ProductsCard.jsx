import React from "react";

const ProductsCard = ({product,deleteProduct}) => {
  return (
    <div className="border-1 bg-white h-fit w-fit p-2 bg rounded flex flex-col gap-1">
      <div className="w-50 h-60 border-1 bg-red-500 rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt="Image is Here"
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <h1 className="font-semibold text-xl">{product.name}</h1>
        <p>{product.description.substring(0,20)}</p>
        <p className="text-2xl font-bold">${product.price}</p>
      </div>
      <button
      onClick={()=>deleteProduct(product.id)}
      className="px-4 py-2 rounded-lg bg-lime-600 hover:bg-lime-600 text-white">
        Delete
      </button>
    </div>
  );
};

export default ProductsCard;
