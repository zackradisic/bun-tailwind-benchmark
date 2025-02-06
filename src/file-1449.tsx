import "./style.css";
import React from 'react';

const BunTailwindDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">Experience the power of fullstack development with Bun and Tailwind CSS.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-indigo-600">Fast Development</h2>
          <p className="text-gray-600">With Bun's instant bundling, you see your changes in real-time!</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-indigo-600">Simple API</h2>
          <p className="text-gray-600">Create powerful APIs with minimal configuration.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-indigo-600">Fullstack Capabilities</h2>
          <p className="text-gray-600">Easily integrate your frontend and backend in one seamless application.</p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default BunTailwindDemo;
