import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        🚀 Fast & Simple Fullstack Development with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the speed of building fullstack applications effortlessly.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-green-500 mb-3">
          Features
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li className="mb-2">📦 Integrated bundling for frontend & backend.</li>
          <li className="mb-2">⚡ Quick setup with minimal configuration.</li>
          <li className="mb-2">🌐 Supports Tailwind CSS for rapid styling.</li>
          <li className="mb-2">🔍 Development mode with detailed error messages.</li>
        </ul>
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
