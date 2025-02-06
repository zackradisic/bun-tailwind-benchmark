import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-700 text-base mb-4">
          This demo showcases how fast and simple it is to build fullstack applications using Bun with React and TypeScript.
        </p>
        <div className="flex justify-between mb-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
          <button className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
            Learn More
          </button>
        </div>
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold text-gray-800">Server Response:</h2>
          <p className="text-gray-600">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
