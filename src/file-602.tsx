import "./style.css";
import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-6">
        Experience the Speed of Bun
      </h1>
      <p className="text-lg text-gray-200 mb-4">
        Build fullstack applications with incredible efficiency and simplicity.
      </p>
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Bun?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">🚀 Lightning-fast performance</li>
          <li className="text-gray-700">📦 Easy bundling and deployment</li>
          <li className="text-gray-700">⚡ React and Tailwind integration</li>
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
        Start Your Journey
      </button>
    </div>
  );
}

export default FastFullstackDemo;
