import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-6xl font-bold text-white mb-8">Bun + Tailwind</h1>
      <p className="text-2xl text-white mb-4">Build Fast, Build Simple</p>
      <button className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        Get Started
      </button>
      <div className="mt-10 bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-semibold text-center mb-4">Why Bun?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Fast Development Server</li>
          <li>Fullstack Capabilities</li>
          <li>Seamless Tailwind Integration</li>
          <li>Easy HTML Imports</li>
        </ul>
      </div>
    </div>
  );
};

export default FastFullstackDemo;
