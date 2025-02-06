import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">Welcome to Bun + Tailwind</h1>
        <p className="text-gray-700 text-base mb-6 text-center">
          Experience the power of fullstack development with Bun, React, and TypeScript.
        </p>
        <div className="flex justify-around">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition">
            Fetch Data
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
