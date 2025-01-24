// src/App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">This is a fullstack application using Bun, React, and TypeScript.</p>
      <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">Server Part</h2>
          <p className="text-gray-600">This runs your server code seamlessly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">Client Part</h2>
          <p className="text-gray-600">With Bun's bundler, managing client assets is a breeze.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">Dynamic API</h2>
          <p className="text-gray-600">Make API calls with minimal setup!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
