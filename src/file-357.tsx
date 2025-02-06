import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
        Build Fullstack Apps with Bun!
      </h1>
      <p className="text-xl text-white mb-8">
        Experience the speed and simplicity of fullstack development.
      </p>
      <div className="space-x-4">
        <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Get Started
        </button>
        <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Learn More
        </button>
      </div>
      <div className="mt-10 w-full max-w-md">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Bun?</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-green-500">✔️</span>
              <span className="ml-2">Fast Development Cycle</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✔️</span>
              <span className="ml-2">Seamless Frontend and Backend</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✔️</span>
              <span className="ml-2">TailwindCSS Integration</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FastAndSimpleBun;
