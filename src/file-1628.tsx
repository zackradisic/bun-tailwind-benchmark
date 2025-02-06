import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a demonstration of how easy it is to build fullstack applications with Bun, React, and TypeScript.
      </p>
      <div className="flex space-x-4">
        <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-indigo-400 transition duration-200">
          Client Action
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-400 transition duration-200">
          Server Action
        </button>
      </div>
      <p className="mt-6 text-sm text-gray-500">Fast, simple, and efficient. Built with Bun and Tailwind.</p>
    </div>
  );
};

export default App;
