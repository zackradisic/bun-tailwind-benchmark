import "./style.css";
import React from 'react';

const BunSpeedDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-white mb-8">Experience the Speed of Bun!</h1>
      <p className="text-lg text-white mb-4">Building fullstack applications has never been easier!</p>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">⚡ Blazing fast runtimes</li>
          <li className="mb-2">🚀 Effortless integration with Tailwind CSS</li>
          <li className="mb-2">📦 Simple setup with static file serving</li>
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition">
        Get Started with Bun
      </button>
    </div>
  );
};

export default BunSpeedDemo;
