import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-white text-5xl font-bold mb-4">
        🚀 Build Fullstack Apps with Bun!
      </h1>
      <p className="text-white text-lg mb-8">
        Discover how fast and simple it is with the new Tailwind integration.
      </p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-200 transition ease-in-out duration-300">
        Get Started Now
      </button>
      <div className="mt-10 p-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-blue-500 text-3xl font-bold mb-4">Features:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">🌟 Fast Development</li>
          <li className="mb-2">🌟 Easy Configuration</li>
          <li className="mb-2">🌟 Fullstack Capabilities</li>
          <li className="mb-2">🌟 Tailwind CSS Integration</li>
        </ul>
      </div>
    </div>
  );
};

export default FastAndSimpleDemo;
