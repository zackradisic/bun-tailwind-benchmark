import React from 'react';

const FastAndSimple: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Discover Bun</h1>
        <p className="text-gray-600 text-lg mb-6 text-center">
          Experience the speed and simplicity of building fullstack applications with Bun.
        </p>
        <div className="flex items-center justify-around mb-4">
          <div className="flex flex-col items-center">
            <div className="text-5xl text-green-500 mb-2">⚡</div>
            <span className="text-gray-700 font-semibold">Fast</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-2">📦</div>
            <span className="text-gray-700 font-semibold">Bundled</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl text-red-500 mb-2">🖥️</div>
            <span className="text-gray-700 font-semibold">Fullstack</span>
          </div>
        </div>
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FastAndSimple;
