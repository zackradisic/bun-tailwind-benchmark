import React from 'react';

const FastFullstackApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun's Fast Fullstack App!</h1>
      <p className="text-lg text-gray-700 max-w-md text-center mb-6">
        Experience the power of developing fullstack applications with React, TypeScript, and TailwindCSS effortlessly!
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <div className="mt-2 p-4 border border-gray-300 rounded-lg bg-white shadow-lg">
          <p className="text-gray-700">Fetching data from the server on click...</p>
          {/* Mock fetching data */}
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
            Fetch Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastFullstackApp;
