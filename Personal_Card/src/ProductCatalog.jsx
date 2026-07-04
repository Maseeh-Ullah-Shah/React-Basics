import React from 'react'

const ProductCatalog = ({id,title,price,category}) => {
  return (
    <div className='border rounded-2xl flex flex-col px-2 py-1 shadow-md hover:shadow-xl'>
      
      <h1>Title : {title}</h1>
      <h2>Price : {price} <span>{price>1000?"🔥 Premium Product" : "✅ Budget Friendly"}</span></h2>
      <h3>Category : {category}</h3>

    </div>
  )
}

export default ProductCatalog
