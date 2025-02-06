import "./style.css";
import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-6 animate-bounce">
        Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg mb-8 max-w-xl text-center">
        Experience the speed and simplicity of creating fullstack applications using Bun. Seamlessly integrate your frontend and backend with just a few lines of code!
      </p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
        Get Started
      </button>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg animate-pulse">
        <h2 className="text-xl font-semibold text-blue-500">Fast Compilation</h2>
        <p className="text-gray-700">
          Import your HTML files and serve them instantly with Bun's dev server.
        </p>
      </div>
    </div>
  );
};

export default FastBunDemo;
