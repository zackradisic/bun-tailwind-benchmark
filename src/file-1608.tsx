import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg mb-6 text-gray-700">Experience the speed and simplicity of developing fullstack applications with Bun.</p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-200 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10 max-w-md w-full p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>🚀 Fast and lightweight</li>
          <li>⚡ Instant reloading</li>
          <li>🛠️ Built-in tooling for fullstack development</li>
        </ul>
      </div>
    </div>
  );
};

export default FastAndSimpleDemo;
