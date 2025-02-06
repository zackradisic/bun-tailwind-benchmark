import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome to Bun + Tailwind!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Building fullstack applications has never been easier.
        </p>
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Features:</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fast development with Bun's server</li>
            <li>Seamless integration with React & TypeScript</li>
            <li>Tailwind CSS for rapid UI development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
