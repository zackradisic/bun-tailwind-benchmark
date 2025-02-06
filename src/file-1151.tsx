import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the speed and simplicity of fullstack development like never before.
      </p>
      <div className="flex flex-wrap justify-center space-x-4">
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-600 transition duration-300">Get Started</button>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition duration-300">Learn More</button>
      </div>
      <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>🚀 Fast startup time and performance</li>
          <li>📦 Built-in bundler for seamless integration</li>
          <li>🌐 Fullstack capabilities with a minimal setup</li>
        </ul>
      </div>
    </div>
  );
};

export default FastAndSimpleBun;
