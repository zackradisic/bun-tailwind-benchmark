import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
        <p className="text-gray-700 text-base mb-4">
          This is a simple example demonstrating how fast and easy it is to build fullstack applications with Bun, React, and TypeScript.
        </p>
        <div className="flex flex-col items-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-200">
            Click Me
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            API Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
