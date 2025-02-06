import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-center mb-6">
          Discover how easy it is to build fullstack applications with Bun, React, and TypeScript.
        </p>
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
