import "./style.css";
import React from 'react';

const BunFastApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-6">
        Build Fullstack Apps Fast with Bun!
      </h1>
      <p className="text-lg text-white mb-4">
        Experience seamless integration with Tailwind CSS
      </p>
      <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
        Get Started
      </button>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Features:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">🔥 Lightning Fast - Enjoy quick server responses</li>
          <li className="mb-2">✨ Simple Setup - Get started with minimal configuration</li>
          <li className="mb-2">🚀 Fullstack Capabilities - Serve both frontend and backend effortlessly</li>
        </ul>
      </div>
    </div>
  );
};

export default BunFastApp;
