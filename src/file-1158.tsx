import React from 'react';

const BunTailwindDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">🏗️ Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-white mb-6">
        Experience the speed and simplicity of building fullstack applications with Bun. 🚀
      </p>
      <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-500">Features:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Simple API for fullstack apps</li>
          <li>Instant HTML bundling</li>
          <li>Easy integration with TailwindCSS</li>
          <li>Fast development workflow</li>
        </ul>
      </div>
    </div>
  );
};

export default BunTailwindDemo;
