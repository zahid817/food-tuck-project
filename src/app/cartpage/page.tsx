"use client"
import { useEffect, useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Image from "next/image";
// import cartimage1 from "@/images/products/Product Image (1).png"
// import cartimage2 from "@/images/products/aboutpageImage2.png"
import Checkout from "@/actions/checkout";

import { useRouter } from "next/navigation";


interface Product {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  quantity: number; // Optional, defaults to 1
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment:"",
  });
  const router = useRouter();

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log(e)
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value })


  }

  useEffect(() => {
    const cart = localStorage.getItem("cartpage");
    if (cart) {
      const parsedCart = JSON.parse(cart);
      setCartItems(parsedCart);
      calculateTotalPrice(parsedCart);
    }
  }, []);

  // Calculate the total price of all items in the cart
  const calculateTotalPrice = (items: Product[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }; 
  
  // remove products from cart

  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cartpage", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };
  
  // update quantity of products in cart
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cartpage", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };
  const handleCheckout = () => {
    
    Checkout(cartItems, customerInfo)
    
  }

  return (
    <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
      <h1 className="text-lg font-semibold mt-9">Products</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item,index) => (

          <div key={index} className="flex justify-between items-center mb-4 border-2 p-4">

            <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
              <div className="">

                <img src={item.imageURL} alt={item.name} className="w-20 h-20 sm:w-28 sm:h-28 " />
                <p className="font-semibold">{item.name}</p>
                <p>Price per unit: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
            <button onClick={() => handleRemoveItem(item._id)} className="text-red-500 font-medium text-sm ml-4">
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center mt-10">Your cart is empty!</p>
      )}
      {cartItems.length > 0 && (
        <h2 className="text-xl font-bold mt-4">Total Amount: ${totalPrice}</h2>
      )}
      <div>
        <h2 className="text-xl font-bold mt-4">Customer Information</h2>
        <div className="mb-8 mt-10">
          <label>Name</label>
          <input type="text"name="name"  className="w-full h-10" 
          value={customerInfo.name}
          onChange={handleInputChange}
          />
          
          
        </div>
        
        <div className="mb-8">
          <label>Contact</label>
          <input type="text"name="phone" className="w-full h-10"
          value={customerInfo.phone}
          onChange={handleInputChange}
          />

          
        </div>
        <div className="mb-8">
          <label>Email</label>
          <input type="text"name="email"  className="w-full h-10"
          onChange={handleInputChange}
          value={customerInfo.email}
          
          />
          
        </div>
        <div className="mb-8">
          <label>Address</label>
          <input type="text"name="address"  className="w-full h-10"
          value={customerInfo.address}
          onChange={handleInputChange}
          
          />
        </div>
      </div>
      <button onClick={handleCheckout} className="bg-red-800 text-black py-2 px-4 mt-8">
        Checkout
        </button>
    </div>
  );
}
export default Cart;