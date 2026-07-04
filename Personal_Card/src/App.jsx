import React from 'react'
import ProfileCard from './ProfileCard'
import ProductCatalog from './ProductCatalog';
const App = () => {
//  const users = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 20,
//     profession: "Student",
//     city: "Lahore",
//   },
//   {
//     id: 2,
//     name: "Sara",
//     age: 24,
//     profession: "Developer",
//     city: "Karachi",
//   },
//   {
//     id: 3,
//     name: "Ahmed",
//     age: 28,
//     profession: "Designer",
//     city: "Islamabad",
//   },
// ];

const products = [
  {
    id: 1,
    title: "iPhone 16",
    price: 1200,
    category: "Mobile"
  },
  {
    id: 2,
    title: "MacBook Air",
    price: 1500,
    category: "Laptop"
  },
  {
    id: 3,
    title: "AirPods Pro",
    price: 250,
    category: "Accessories"
  },
  {
    id: 4,
    title: "Apple Watch",
    price: 450,
    category: "Watch"
  }
];

  return (
    <div className='flex gap-3'>
      {
        products.map((elem)=>{
          return <ProductCatalog key={elem.id} {...elem}></ProductCatalog>
        })
      }
    </div>
  )
}

export default App

