import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600">Bun + TailwindCSS</h1>
        <p className="mt-4 text-center text-gray-600">
          Experience the speed and simplicity of building fullstack applications with Bun, React, and TypeScript!
        </p>
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">API Data:</h2>
          <ul className="mt-2 space-y-2">
            {/* Simulate fetching data from the API */}
            <li className="p-4 bg-gray-200 rounded-md shadow">
              User 1: <span className="font-semibold">Alice</span>
            </li>
            <li className="p-4 bg-gray-200 rounded-md shadow">
              User 2: <span className="font-semibold">Bob</span>
            </li>
            <li className="p-4 bg-gray-200 rounded-md shadow">
              User 3: <span className="font-semibold">Charlie</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
