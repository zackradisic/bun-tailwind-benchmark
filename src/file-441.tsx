import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun + Tailwind!</h1>
        <p className="text-gray-700 mb-4 text-center">
          This is a fullstack application built with Bun, React, and TypeScript. 
          We leverage TailwindCSS for rapid UI development.
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
          <button className="mt-4 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-300 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
