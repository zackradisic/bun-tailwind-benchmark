import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-10">
      <h1 className="text-5xl font-bold text-gray-800 mb-5">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-600 mb-10">Experience the speed and simplicity of Bun's fullstack dev server.</p>

      <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-200">
        Get Started
      </button>

      <div className="mt-10 p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg text-gray-700">🚀 Fast Development</li>
          <li className="text-lg text-gray-700">🛠️ Easy Setup</li>
          <li className="text-lg text-gray-700">📦 Fullstack Integration</li>
        </ul>
      </div>

      <footer className="mt-10 text-gray-600">
        <p>Page 34 of 2048</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
