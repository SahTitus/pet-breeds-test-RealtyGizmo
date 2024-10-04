import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">PetBreeds</h3>
            <p className="text-gray-400 text-sm">Connecting pet lovers with information and resources.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#breeds" className="hover:text-gray-300">Breeds</a>
            <a href="#about" className="hover:text-gray-300">About Us</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} PetBreeds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};