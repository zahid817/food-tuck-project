"use client";
import { useState } from "react";
import Link from "next/link";
import { LucideShoppingCart, MenuIcon, Search, UserCircleIcon } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black w-full h-20 flex items-center px-6 md:px-20 justify-between text-white font-semibold text-[20px]">
      {/* Logo */}
      <h1 className="text-white text-2xl">
        Food<span className="text-[#FF9F0D]">tuck</span>
      </h1>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link href="/">Home</Link>
        <Link href="/Menu-page">Menu</Link>
        <Link href="/chef-page">Chefs</Link>
        <Link href="/Pages">Pages</Link>
        <Link href="/About">About</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
      
      {/* Icons */}
      <div className="flex items-center gap-6">
        <Link href="/cartpage">
          <LucideShoppingCart className="w-[30px] h-[30px] text-white cursor-pointer" />
        </Link>
        <UserCircleIcon className="w-[30px] h-[30px] text-white cursor-pointer" />
        <Search className="w-[30px] h-[30px] text-white cursor-pointer" />
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon className="w-[30px] h-[30px] text-white" />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center py-5 space-y-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/Menu-page" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link href="/chef-page" onClick={() => setMenuOpen(false)}>Chefs</Link>
          <Link href="/Pages" onClick={() => setMenuOpen(false)}>Pages</Link>
          <Link href="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/Shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

