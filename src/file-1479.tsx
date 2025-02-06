import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          This is a fullstack application using Bun, React, and TypeScript!
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Started
        </button>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Features:</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fast and simple bundling</li>
            <li>Seamless integration with TailwindCSS</li>
            <li>Type-safe with TypeScript</li>
            <li>API ready with Bun's server capabilities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
