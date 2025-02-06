import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Build Fullstack Apps with Ease
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of using Bun with Tailwind CSS.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Features
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-600">Fast development with Bun</li>
          <li className="text-gray-600">Seamless Tailwind integration</li>
          <li className="text-gray-600">Fullstack capabilities in one command</li>
        </ul>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
      <footer className="mt-12">
        <p className="text-sm text-gray-500">
          Bun is the future of fullstack development!
        </p>
      </footer>
    </div>
  );
};

export default FastAndSimpleBun;
