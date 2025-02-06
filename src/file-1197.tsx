import "./style.css";
import React from 'react';

const BunFastApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-10">
      <h1 className="text-5xl font-bold text-white mb-5">Welcome to Bun!</h1>
      <p className="text-xl text-gray-200 mb-10 text-center">
        Experience the speed and simplicity of building fullstack applications with Bun and TailwindCSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-5 text-center">
          <h2 className="text-2xl font-semibold text-purple-600">Fast</h2>
          <p className="text-gray-700">Bun's bundler is incredibly fast, allowing for rapid development.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-5 text-center">
          <h2 className="text-2xl font-semibold text-purple-600">Simple</h2>
          <p className="text-gray-700">Set up your server and routes in a few simple steps.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-5 text-center">
          <h2 className="text-2xl font-semibold text-purple-600">Integrated</h2>
          <p className="text-gray-700">Bun seamlessly handles frontend and backend in one package.</p>
        </div>
      </div>
      <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
};

export default BunFastApp;
