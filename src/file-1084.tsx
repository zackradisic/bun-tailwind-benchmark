import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-200 mb-6">Experience the speed and simplicity of Bun for your next project.</p>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li className="mb-2">🚀 Fast bundling with no extra setup</li>
          <li className="mb-2">🌟 Integrated Tailwind CSS support</li>
          <li className="mb-2">⚡ Lightning-fast fullstack capabilities</li>
        </ul>
      </div>
      <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
