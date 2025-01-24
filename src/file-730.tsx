import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-700 mb-4">Experience the speed and simplicity of Bun's fullstack capabilities.</p>
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">Get Started</button>
        <button className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 transition">Documentation</button>
      </div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How it Works</h2>
        <p className="text-gray-600">Bun serves your frontend and backend seamlessly. Create your HTML routes effortlessly!</p>
      </div>
    </div>
  );
};

export default FastBunDemo;
