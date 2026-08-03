import React from 'react'
import { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Cart = ({product}) => {
    const {setAddCart} = useContext(MyShop)
  return (
    <div className='border-1 bg-gray-200 p-2 flex flex-col rounded-lg gap-2 shadow-md transition-all duration-300 bg-white'>
      <div className='w-60 h-60 overflow-hidden rounded-lg'>
        <img className='w-full h-full object-cover'
        src={product.image} alt="" />
      </div>
      <div>
        <h1 className='font-bold text-xl text-gray-900'>Product Name</h1>
        <p className='text-sm'>ID: {product.id}</p>
        <p className='font-semibold'>{product.description.substring(0,25)}</p>
      </div>
      <div className='flex justify-between '>
         <p className='font-bold text-2xl text-green-600'>${product.price} </p>
        <button 
        onClick={()=>setAddCart((prev)=>[...prev,product])}
        className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cart
