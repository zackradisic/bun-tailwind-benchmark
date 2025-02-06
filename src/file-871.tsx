import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a simple demo showcasing how to build fullstack applications using Bun, React, and TypeScript.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
          Client Action
        </button>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
          Server Request
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Your Data:</h2>
        <ul className="w-full max-w-md mt-4 space-y-2 bg-white rounded-lg shadow-md">
          <li className="p-4 border border-gray-200 rounded">Example Item 1</li>
          <li className="p-4 border border-gray-200 rounded">Example Item 2</li>
          <li className="p-4 border border-gray-200 rounded">Example Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
