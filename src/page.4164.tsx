import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        Welcome to Bun with Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demo showcasing how to build fullstack applications with ease.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
        <button className="px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default App;
