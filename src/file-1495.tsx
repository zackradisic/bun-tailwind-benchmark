import "./style.css";
import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Explore Bun with Tailwind CSS!
        </h1>
        <p className="text-gray-700 text-base mb-4">
          Building fullstack applications has never been this fast and easy. 
          Experience seamless server-client integration with Bun.
        </p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          Get Started Now!
        </button>
      </div>
      <div className="mt-8 flex space-x-4">
        <div className="p-4 bg-green-100 rounded-full shadow-md">
          <h2 className="text-lg font-semibold text-green-600">Fast</h2>
          <p className="text-green-800">Unmatched performance with Bun.</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-full shadow-md">
          <h2 className="text-lg font-semibold text-yellow-600">Simple</h2>
          <p className="text-yellow-800">Easy setup and configuration.</p>
        </div>
        <div className="p-4 bg-red-100 rounded-full shadow-md">
          <h2 className="text-lg font-semibold text-red-600">Effective</h2>
          <p className="text-red-800">Build robust applications effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default FastAndSimpleApp;
