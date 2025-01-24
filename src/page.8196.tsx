import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Welcome to Bun's Tailwind Integration!
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          This is a demo showcasing the speed and simplicity of building
          fullstack applications with Bun, React, and TypeScript.
        </p>
        <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
