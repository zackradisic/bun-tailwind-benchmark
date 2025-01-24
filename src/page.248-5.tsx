import React from 'react';

const FastSimpleBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of building with Bun.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-8 p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600 mb-2">🚀 Fast Development Time</li>
          <li className="text-gray-600 mb-2">🔧 Simplified Setup</li>
          <li className="text-gray-600 mb-2">📦 Integrated Frontend and Backend</li>
        </ul>
      </div>
    </div>
  );
};

export default FastSimpleBunDemo;
