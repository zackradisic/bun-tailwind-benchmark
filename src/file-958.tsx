import "./style.css";
import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4">
        Experience the Speed of Bun
      </h1>
      <p className="text-lg text-white mb-8">
        Build fullstack applications with ease and speed!
      </p>
      <div className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Why Choose Bun?
        </h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-700">Fast bundling of JavaScript/TypeScript</li>
          <li className="text-gray-700">Seamless integration of TailwindCSS</li>
          <li className="text-gray-700">Effortless frontend and backend setup</li>
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition ease-in-out duration-300">
        Get Started
      </button>
    </div>
  );
};

export default FastBunDemo;
