// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">AllInOneMart</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">All</a>
          <a href="#" className="hover:text-gray-300">Trending Items</a>
          <a href="#" className="hover:text-gray-300">Grocery</a>
          <a href="#" className="hover:text-gray-300">Best Sellers</a>
          <a href="#" className="hover:text-gray-300">New Release</a>
          <a href="#" className="hover:text-gray-300">Music</a>
          <a href="#" className="hover:text-gray-300">Books</a>
        </nav>
        <div className="relative flex-grow max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 4a7 7 0 107 7 7 7 0 00-7-7zm0 14a7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7 7 7 0 01-7 7zm8.485-8.485a9.953 9.953 0 001.485-2.485 9.953 9.953 0 00-1.485-2.485 9.953 9.953 0 00-2.485-1.485 9.953 9.953 0 00-2.485 1.485 9.953 9.953 0 00-1.485 2.485 9.953 9.953 0 00-1.485 2.485 9.953 9.953 0 001.485 2.485 9.953 9.953 0 002.485 1.485 9.953 9.953 0 002.485-1.485z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-gray-700 text-gray-300 py-2">
        <div className="container mx-auto flex space-x-4">
          <a href="#" className="hover:text-white">Subcategory 1</a>
          <a href="#" className="hover:text-white">Subcategory 2</a>
          <a href="#" className="hover:text-white">Subcategory 3</a>
          <a href="#" className="hover:text-white">Subcategory 4</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
