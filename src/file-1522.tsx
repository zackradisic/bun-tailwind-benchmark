import React from 'react';

const FastSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Build Fast, Build Simple!</h1>
      <p className="text-lg text-gray-700 mb-6">With Bun, you can create fullstack applications effortlessly.</p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
          Get Started
        </button>
        <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Learn More
        </button>
      </div>
      <div className="mt-10 bg-white p-5 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Use Bun?</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">⚡ Fast Development</li>
          <li className="text-gray-600">🚀 Simple Integration</li>
          <li className="text-gray-600">🌍 Fullstack Capabilities</li>
        </ul>
      </div>
    </div>
  );
};

export default FastSimpleApp;
