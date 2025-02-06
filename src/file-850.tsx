import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-600 mb-4 text-center">
          This is a demonstration of how fast and simple it is to build fullstack applications using Bun's integration with TailwindCSS.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
