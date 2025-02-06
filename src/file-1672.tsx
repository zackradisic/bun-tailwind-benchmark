import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a demo showcasing how you can build fullstack applications with React, TypeScript, and Tailwind CSS using Bun.
      </p>
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>

      <div className="mt-8 w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-800">Server Response</h2>
          <p className="text-gray-600">
            Fetching API data from the server...
          </p>
          {/* This could be an API call to Bun's backend */}
        </div>
      </div>
    </div>
  );
};

export default App;
