import "./style.css";
import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-700 mb-8">Experience speed and simplicity like never before!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Fast Development</h2>
          <p className="text-gray-600">Quickly prototype and build your fullstack application with ease.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-purple-500 mb-2">Flexible Integration</h2>
          <p className="text-gray-600">Easily integrate frontend and backend with Bun's built-in capabilities.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Simple Deployment</h2>
          <p className="text-gray-600">Deploy your app effortlessly with Bun's streamlined process.</p>
        </div>
      </div>
      <div className="mt-12">
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FastAndSimpleApp;
