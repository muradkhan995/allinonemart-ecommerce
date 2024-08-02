// src/components/NavigationBar.js
import React, { useState } from 'react';

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-green-600 text-white font-bold shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo or Site Title */}
        <div className="text-3xl font-bold">
          AllInOneMart
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">Trending Items</a>
          <a href="#" className="hover:text-gray-400">Grocery</a>
          <a href="#" className="hover:text-gray-400">Best Sellers</a>
          <a href="#" className="hover:text-gray-400">New Release</a>
          <a href="#" className="hover:text-gray-400">Music</a>
          <a href="#" className="hover:text-gray-400">Books</a>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-grow max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-green-800 text-white placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-green-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 107 7 7 7 0 00-7-7zm0 14a7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7 7 7 0 01-7 7zm8.485-8.485a9.953 9.953 0 001.485-2.485 9.953 9.953 0 00-1.485-2.485 9.953 9.953 0 00-2.485-1.485 9.953 9.953 0 00-2.485 1.485 9.953 9.953 0 00-1.485 2.485 9.953 9.953 0 00-1.485 2.485 9.953 9.953 0 001.485 2.485 9.953 9.953 0 002.485 1.485 9.953 9.953 0 002.485-1.485z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-green-400 px-4 py-2 rounded-lg hover:bg-green-900 focus:outline-none"
          >
            <span>Categories</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Subcategory 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Subcategory 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Subcategory 3</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Subcategory 4</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
