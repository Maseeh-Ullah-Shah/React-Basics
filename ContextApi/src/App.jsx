import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Cart from "./components/Cart";
import AddToCart from "./components/AddToCart";
import { useContext } from "react";
import { MyShop } from "./context/MyWebsite";

const App = () => {
const {toggle,setToggle,addCart,setAddCart} = useContext(MyShop);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://picsum.photos/300?random=1",
      price: 89.99,
      description: "Premium wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      image: "https://picsum.photos/300?random=2",
      price: 39.99,
      description: "RGB gaming mouse with adjustable DPI.",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      image: "https://picsum.photos/300?random=3",
      price: 79.99,
      description: "Blue switch mechanical keyboard with RGB lighting.",
    },
    {
      id: 4,
      name: "Smart Watch",
      image: "https://picsum.photos/300?random=4",
      price: 149.99,
      description: "Fitness tracking smartwatch with AMOLED display.",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      image: "https://picsum.photos/300?random=5",
      price: 59.99,
      description: "Portable Bluetooth speaker with deep bass.",
    },
    {
      id: 6,
      name: "Laptop Stand",
      image: "https://picsum.photos/300?random=6",
      price: 29.99,
      description: "Adjustable aluminum laptop stand.",
    },
    {
      id: 7,
      name: "USB-C Hub",
      image: "https://picsum.photos/300?random=7",
      price: 49.99,
      description: "7-in-1 USB-C hub with HDMI and USB ports.",
    },
    {
      id: 8,
      name: "Wireless Charger",
      image: "https://picsum.photos/300?random=8",
      price: 24.99,
      description: "Fast wireless charging pad.",
    },
    {
      id: 9,
      name: "Monitor 24 Inch",
      image: "https://picsum.photos/300?random=9",
      price: 199.99,
      description: "Full HD IPS monitor with thin bezels.",
    },
    {
      id: 10,
      name: "Webcam HD",
      image: "https://picsum.photos/300?random=10",
      price: 44.99,
      description: "1080p webcam with built-in microphone.",
    },
    {
      id: 11,
      name: "External SSD",
      image: "https://picsum.photos/300?random=11",
      price: 119.99,
      description: "Portable 1TB SSD with high-speed transfer.",
    },
    {
      id: 12,
      name: "Power Bank",
      image: "https://picsum.photos/300?random=12",
      price: 34.99,
      description: "20000mAh fast charging power bank.",
    },
    {
      id: 13,
      name: "LED Desk Lamp",
      image: "https://picsum.photos/300?random=13",
      price: 22.99,
      description: "Eye-care LED desk lamp with brightness control.",
    },
    {
      id: 14,
      name: "Portable Fan",
      image: "https://picsum.photos/300?random=14",
      price: 18.99,
      description: "USB rechargeable portable desk fan.",
    },
    {
      id: 15,
      name: "Backpack",
      image: "https://picsum.photos/300?random=15",
      price: 54.99,
      description: "Water-resistant laptop backpack.",
    },
    {
      id: 16,
      name: "Office Chair",
      image: "https://picsum.photos/300?random=16",
      price: 249.99,
      description: "Ergonomic office chair with lumbar support.",
    },
    {
      id: 17,
      name: "Coffee Mug",
      image: "https://picsum.photos/300?random=17",
      price: 14.99,
      description: "Ceramic coffee mug with modern design.",
    },
    {
      id: 18,
      name: "Fitness Band",
      image: "https://picsum.photos/300?random=18",
      price: 69.99,
      description: "Track your daily activity and heart rate.",
    },
    {
      id: 19,
      name: "Digital Camera",
      image: "https://picsum.photos/300?random=19",
      price: 499.99,
      description: "Compact digital camera with 4K recording.",
    },
    {
      id: 20,
      name: "Tripod Stand",
      image: "https://picsum.photos/300?random=20",
      price: 39.99,
      description: "Lightweight tripod for cameras and phones.",
    },
    {
      id: 21,
      name: "Graphic Tablet",
      image: "https://picsum.photos/300?random=21",
      price: 129.99,
      description: "Drawing tablet for digital artists.",
    },
    {
      id: 22,
      name: "VR Headset",
      image: "https://picsum.photos/300?random=22",
      price: 349.99,
      description: "Immersive virtual reality headset.",
    },
    {
      id: 23,
      name: "Microphone",
      image: "https://picsum.photos/300?random=23",
      price: 79.99,
      description: "USB condenser microphone for streaming.",
    },
    {
      id: 24,
      name: "Ring Light",
      image: "https://picsum.photos/300?random=24",
      price: 29.99,
      description: "LED ring light for video recording.",
    },
    {
      id: 25,
      name: "Phone Holder",
      image: "https://picsum.photos/300?random=25",
      price: 12.99,
      description: "Adjustable mobile phone stand.",
    },
    {
      id: 26,
      name: "Smart Bulb",
      image: "https://picsum.photos/300?random=26",
      price: 19.99,
      description: "Wi-Fi enabled RGB smart bulb.",
    },
    {
      id: 27,
      name: "Wireless Earbuds",
      image: "https://picsum.photos/300?random=27",
      price: 69.99,
      description: "True wireless earbuds with charging case.",
    },
    {
      id: 28,
      name: "Tablet",
      image: "https://picsum.photos/300?random=28",
      price: 299.99,
      description: "10-inch Android tablet for entertainment.",
    },
    {
      id: 29,
      name: "Printer",
      image: "https://picsum.photos/300?random=29",
      price: 159.99,
      description: "All-in-one wireless printer.",
    },
    {
      id: 30,
      name: "Router",
      image: "https://picsum.photos/300?random=30",
      price: 89.99,
      description: "Dual-band Wi-Fi 6 router for fast internet.",
    },
    {
      id: 31,
      name: "Portable Monitor",
      image: "https://picsum.photos/300?random=31",
      price: 229.99,
      description: "15.6-inch portable Full HD monitor.",
    },
    {
      id: 32,
      name: "Gaming Controller",
      image: "https://picsum.photos/300?random=32",
      price: 59.99,
      description: "Wireless controller compatible with PC.",
    },
  ]);
  
  function removeFromCart(id){
    let filteredArray= addCart.filter((product)=>product.id !== id);
    setAddCart(filteredArray);
    console.log(id);
  }
  return (
    <div className="h-screen bg-pink-50 p-2 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <AddToCart removeFromCart={removeFromCart}/>
      )}
    </div>
  );
};

export default App;
