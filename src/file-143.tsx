import React from 'react';

const FastFullstackApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 animate-bounce">
        Build Fullstack Applications with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of using Bun with TailwindCSS.
      </p>
      <button className="px-6 py-2 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300">
        Get Started
      </button>
      <div className="mt-10 p-4 max-w-md bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Features</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-700">Live Reloading</li>
          <li className="text-gray-700">Fast Bundling</li>
          <li className="text-gray-700">Intuitive API</li>
        </ul>
      </div>
    </div>
  );
};

export default FastFullstackApp;
