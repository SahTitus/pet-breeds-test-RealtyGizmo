'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-white fixed w-full z-50   bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">PetBreeds</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#home" className="hover:text-gray-300">Home</Link>
          <Link href="#breeds" className="hover:text-gray-300">Breeds</Link>
          <Link href="#about" className="hover:text-gray-300">About</Link>
          <Link href="#contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="#home" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
        <Link href="#breeds" className="block px-4 py-2 hover:bg-gray-700">Breeds</Link>
        <Link href="#about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
        <Link href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
      </div>
    </nav>
  );
};