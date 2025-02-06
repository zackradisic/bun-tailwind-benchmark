import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-4 shadow-lg">Experience Speed & Simplicity with Bun!</h1>
      <p className="text-lg text-white mb-8 text-center max-w-lg">
        Discover how effortlessly you can build fullstack applications using Bun’s blazing fast dev server and TailwindCSS integration.
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        Get Started Now!
      </button>
      <div className="mt-10 flex space-x-4">
        <div className="p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Fast Development</h2>
          <p>Hot reloading and instant feedback.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Seamless Integration</h2>
          <p>Connect frontend and backend effortlessly.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Flexible Configurations</h2>
          <p>TailwindCSS and plugins made simple.</p>
        </div>
      </div>
    </div>
  );
};

export default FastAndSimpleBun;
