import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-4">
        🚀 Build Fast with Bun & Tailwind
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Experience fullstack development like never before!
      </p>
      <div className="flex flex-wrap justify-center">
        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg transition transform hover:scale-105">
          Get Started
        </button>
        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg transition transform hover:scale-105 ml-4">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Use Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>🚀 Fast Development</li>
          <li>🛠️ Simple Configuration</li>
          <li>📦 Fullstack Capabilities</li>
        </ul>
      </div>
    </div>
  );
};

export default FastBunDemo;
