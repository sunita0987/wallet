import React, { useState } from 'react';
const Navbar = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-white shadow">
      <div className="flex items-center space-x-4 ml-10">
        <img src="src/assets/images/eyeicon.png" alt="logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">NFTsee</h1>
        <button className="text-regular cursor-pointer hover:text-gray-300 font-poppins">Feed</button>
        <button className="text-regular cursor-pointer hover:text-gray-300 font-poppins">Wallet</button>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search here..."
          className="px-3 py-1 border border-gray-300 rounded-2xl text-sm dark:bg-white dark:text-gray-600"
        />
        <button
          onClick={toggleDark}
          className="w-5 h-5 rounded-full bg-black  dark:bg-white"
        />
        <img
          src="src/assets/images/user.png"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
