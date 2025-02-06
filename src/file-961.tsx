import "./style.css";
import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-5xl font-bold text-blue-600 mb-4 animate-bounce">
        Build Fullstack Apps with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of Bun's fullstack capabilities.
      </p>
      <div className="space-x-4">
        <button className="px-6 py-2 text-white bg-green-500 rounded-full transition-all duration-300 hover:bg-green-400">
          Get Started
        </button>
        <button className="px-6 py-2 text-white bg-red-500 rounded-full transition-all duration-300 hover:bg-red-400">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <svg
          className="w-24 h-24 animate-spin text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm10-3h-4v4h4v-4z" />
        </svg>
      </div>
    </div>
  );
};

export default FastBunDemo;
