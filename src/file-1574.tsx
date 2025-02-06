import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-5">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-xl text-white mb-8">
        Experience the speed and simplicity of Bun with Tailwind integration.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">🚀 Blazing Fast Performance</li>
          <li className="text-gray-700">🔧 Easy Integration with Tailwind CSS</li>
          <li className="text-gray-700">🌍 Fullstack Development in One Place</li>
        </ul>
      </div>
      <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded-lg shadow">
        Get Started with Bun!
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
