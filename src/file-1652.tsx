import React from 'react';

const BunFastDemo: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Experience the Speed of Bun!
        </h1>
        <p className="text-gray-600 mb-6">
          Build fullstack applications faster and simpler with bun-plugin-tailwind.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <div className="mt-8">
          <p className="text-sm text-gray-500">Page 34 of 2048</p>
        </div>
      </div>
    </div>
  );
};

export default BunFastDemo;
