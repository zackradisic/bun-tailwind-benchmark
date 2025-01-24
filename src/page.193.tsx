import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-600 text-center mb-6">
          Experience the simplicity and speed of building fullstack applications with React, TypeScript, and TailwindCSS.
        </p>
        <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
        <div className="flex justify-between mt-6">
          <span className="text-gray-500">Server-side API</span>
          <span className="text-gray-500">Client-side UI</span>
        </div>
      </div>
    </div>
  );
};

export default App;
