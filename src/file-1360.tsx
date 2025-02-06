import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        Experience the Speed of Bun
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Build fullstack applications fast and simply with Bun and TailwindCSS!
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Get Started
        </button>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:ring-blue-300">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500">
        Page 34 of 2048
      </footer>
    </div>
  );
};

export default FastAndSimpleBun;
