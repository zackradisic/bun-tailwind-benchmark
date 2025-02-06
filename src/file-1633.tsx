import "./style.css";
import React from 'react';

const FastBunApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-5">
      <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
        Build Fast with Bun & Tailwind!
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Experience the speed and simplicity of fullstack development with Bun.
      </p>
      <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
      <div className="mt-8 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Why Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Fast Bundling</li>
          <li>Integrated Development Server</li>
          <li>Seamless API Handling</li>
          <li>Tailwind CSS Support</li>
        </ul>
      </div>
    </div>
  );
};

export default FastBunApp;
