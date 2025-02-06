import "./style.css";
import React from 'react';

const FastAndSimpleComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
      <h1 className="text-5xl font-extrabold text-white mb-4 animate-bounce">
        Build Fast with Bun!
      </h1>
      <p className="text-xl text-gray-100 mb-6">
        Experience the simplicity of fullstack development.
      </p>
      <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        Get Started!
      </button>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-lg max-w-xs w-full">
        <h2 className="text-2xl font-bold mb-2 text-center">Why Use Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>⚡ Fast bundling and serving</li>
          <li>🛠️ Simple API for fullstack apps</li>
          <li>🎨 Tailwind CSS integration</li>
          <li>🚀 Modern JavaScript support</li>
        </ul>
      </div>
    </div>
  );
};

export default FastAndSimpleComponent;
