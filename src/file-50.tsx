import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <h1 className="text-5xl font-bold text-white mb-4">
        Build Fullstack Apps Fast with Bun!
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Experience the simplicity and speed of Bun's fullstack capabilities.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
          Learn More
        </button>
      </div>
      <svg className="w-32 h-32 mt-10 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a8 8 0 0 1 8 8H2a8 8 0 0 1 8-8z" />
      </svg>
    </div>
  );
};

export default FastAndSimpleApp;
