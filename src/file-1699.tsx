import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps Fast!</h1>
      <p className="text-xl text-gray-200 mb-6">
        Experience the speed and simplicity of building fullstack applications with Bun and TailwindCSS!
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 m-2 max-w-xs">
          <h2 className="text-2xl font-semibold text-blue-600">Instant Setup</h2>
          <p className="text-gray-700">Get started with Bun and Tailwind in no time.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 m-2 max-w-xs">
          <h2 className="text-2xl font-semibold text-blue-600">Integrated Tools</h2>
          <p className="text-gray-700">Powerful bundling with no extra configuration.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 m-2 max-w-xs">
          <h2 className="text-2xl font-semibold text-blue-600">Fast Performance</h2>
          <p className="text-gray-700">Lightning-fast build times with Bun's server.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Get Started!
      </button>
    </div>
  );
};

export default FastAndSimpleBun;
