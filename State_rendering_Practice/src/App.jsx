import React, { useState } from 'react'
import ProductsCard from './ProductsCard';

const App = () => {

  let [productsData, setProductsData] = useState( [
  {
    id: 1,
    image: "https://picsum.photos/id/1/400/400",
    description: "Premium wireless headphones with noise cancellation",
    price: 199.99
  },
  {
    id: 2,
    image: "https://picsum.photos/id/2/400/400",
    description: "Minimalist smartwatch with fitness tracking",
    price: 249.50
  },
  {
    id: 3,
    image: "https://picsum.photos/id/3/400/400",
    description: "Classic running shoes for everyday comfort",
    price: 89.99
  },
  {
    id: 4,
    image: "https://picsum.photos/id/4/400/400",
    description: "Portable Bluetooth speaker with rich bass",
    price: 79.95
  },
  {
    id: 5,
    image: "https://picsum.photos/id/5/400/400",
    description: "High-performance sports backpack",
    price: 65.00
  },
  {
    id: 6,
    image: "https://picsum.photos/id/6/400/400",
    description: "Wireless charging pad for all devices",
    price: 39.99
  },
  {
    id: 7,
    image: "https://picsum.photos/id/7/400/400",
    description: "Premium leather wallet with RFID protection",
    price: 45.00
  },
  {
    id: 8,
    image: "https://picsum.photos/id/8/400/400",
    description: "Instant camera with printable photos",
    price: 129.99
  },
  {
    id: 9,
    image: "https://picsum.photos/id/9/400/400",
    description: "Noise-cancelling earbuds with long battery life",
    price: 159.00
  },
  {
    id: 10,
    image: "https://picsum.photos/id/10/400/400",
    description: "Eco-friendly stainless steel water bottle",
    price: 24.99
  },
  {
    id: 11,
    image: "https://picsum.photos/id/11/400/400",
    description: "Smartphone tripod with wireless remote",
    price: 35.50
  },
  {
    id: 12,
    image: "https://picsum.photos/id/12/400/400",
    description: "Running shoes with advanced cushioning",
    price: 110.00
  },
  {
    id: 13,
    image: "https://picsum.photos/id/13/400/400",
    description: "Fitness tracker with heart rate monitor",
    price: 99.95
  },
  {
    id: 14,
    image: "https://picsum.photos/id/14/400/400",
    description: "Professional studio headphones",
    price: 299.99
  },
  {
    id: 15,
    image: "https://picsum.photos/id/15/400/400",
    description: "Silicone phone case with shock protection",
    price: 19.99
  },
  {
    id: 16,
    image: "https://picsum.photos/id/16/400/400",
    description: "Portable power bank with fast charging",
    price: 49.99
  },
  {
    id: 17,
    image: "https://picsum.photos/id/17/400/400",
    description: "Designer sunglasses with UV protection",
    price: 75.00
  },
  {
    id: 18,
    image: "https://picsum.photos/id/18/400/400",
    description: "Laptop backpack with USB charging port",
    price: 89.50
  },
  {
    id: 19,
    image: "https://picsum.photos/id/19/400/400",
    description: "Smart fitness scale with body analysis",
    price: 59.99
  },
  {
    id: 20,
    image: "https://picsum.photos/id/20/400/400",
    description: "High-quality wireless mouse for productivity",
    price: 44.95
  }
]);

function deleteProduct(id) {
  productsData = productsData.filter((product)=>product.id !== id);
  setProductsData(productsData);
}
  return (
    <div className='flex flex-wrap gap-5'>
     {
        productsData.map((product)=><ProductsCard key={product.id} product = {product} deleteProduct = {deleteProduct}/>)
     }
    </div>
  )
}

export default App
