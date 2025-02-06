import "./style.css";
import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fast with Bun 🚀</h1>
      <p className="text-lg text-gray-700 mb-8">Experience the simplicity and speed of building fullstack applications with Bun.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        Get Started
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
        <ul className="list-disc list-inside mt-2">
          <li className="text-gray-600">🔥 Fast bundling</li>
          <li className="text-gray-600">📦 Easy integration with Tailwind CSS</li>
          <li className="text-gray-600">🔄 API handling made simple</li>
        </ul>
      </div>
      <footer className="mt-8 text-gray-500">
        <p>© 2023 Bun Team. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleApp;
