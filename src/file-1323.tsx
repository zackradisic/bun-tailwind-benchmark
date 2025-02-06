import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Bun with Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-600">
        This is a fullstack application powered by Bun, React, and TypeScript.
      </p>
      <button className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Click Me
      </button>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">Client Data</h2>
        <p className="text-gray-500">Fetching this from the Bun server...</p>
      </div>
      <div className="flex gap-4 mt-6">
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
          <p className="text-md text-gray-700">User 1</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
          <p className="text-md text-gray-700">User 2</p>
        </div>
      </div>
    </div>
  );
};

export default App;
