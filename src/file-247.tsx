import "./style.css";
import React from 'react';

const FastApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        🚀 Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Experience the speed and simplicity of Bun's fullstack development!
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 text-white bg-green-500 rounded shadow hover:bg-green-600 transition">
          Get Started
        </button>
        <button className="px-6 py-3 text-gray-800 border border-gray-300 rounded hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-4">
        <p className="text-sm text-gray-500">Page 34 of 2048</p>
      </footer>
    </div>
  );
};

export default FastApp;
