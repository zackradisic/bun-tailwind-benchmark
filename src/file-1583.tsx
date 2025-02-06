import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of building applications with Bun's fullstack capabilities.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2 text-gray-600">🚀 Ultra-fast development server</li>
          <li className="mb-2 text-gray-600">🎨 Integrated Tailwind CSS support</li>
          <li className="mb-2 text-gray-600">📦 Simple bundling for fullstack applications</li>
        </ul>
      </div>
      <button className="mt-6 py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
