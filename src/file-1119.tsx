import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Build with Bun & Tailwind</h1>
      <p className="text-lg text-gray-700 mb-4">
        Discover how fast and simple it is to build fullstack applications
        using Bun paired with TailwindCSS!
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Features:</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>🏃 Fast bundling with Bun</li>
          <li>🎨 TailwindCSS utility-first styling</li>
          <li>⚡ Easily build fullstack apps</li>
          <li>🌐 Seamless integration with APIs</li>
        </ul>
      </div>
    </div>
  );
};

export default FastBunDemo;
