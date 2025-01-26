"use client";
import Link from "next/link" 
import { LucideShoppingCart, MenuIcon, Search, ShoppingCart, UserCircle, UserCircleIcon, } from "lucide-react";

export  function Header() {
  return (
    <>
    <section>
          <div className="bg-black w-full h-20 flex items-center pl-[200px] font-semibold text-[20px]">
        <h1 className="text-white">Food<span className="text-[#FF9F0D]">tuck</span></h1>
        <nav className="bg-black w-full h-20 flex  pl-[100px] font-semibold text-[20px]">
          <ul className="flex items-center gap-10">
         
          <Link href={"/"}>
            <li className="text-white">Home</li>
            </Link>
            <Link href={"Menu-page"}>
            <li className="text-white">Menu</li>
            </Link>
            <Link href={"chef-page"}>
            <li className="text-white">Chefs</li>
            </Link>
            <Link href={"Pages"}>
            <li className="text-white">Pages</li>
            </Link>
            <Link href={"About"}>
            <li className="text-white">About</li>
            </Link>
            <Link href={"Shop"}>
            <li className="text-white">Shop</li>
            </Link>
            <Link href={"Contact"}>
            <li className="text-white">Contact</li>
            </Link>          
          </ul>
          
          
        </nav>
        <div className="flex items-center gap-10 mr-[100px]">
          <LucideShoppingCart className="w-[30px] h-[30px] text-white"/>
          <UserCircleIcon className="w-[30px] h-[30px] text-white"/>
          <Search className="w-[30px] h-[30px] text-white"/>

        </div>
        
        
      </div>
      
    </section>
    </>
  )
}

