import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Welcome to My Bun App!
        </h1>
        <p className="text-gray-700 text-base mb-4">
          This is a simple application built with Bun, React, and TypeScript showcasing the power of Bun's Tailwind integration.
        </p>
        <div className="flex justify-around">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Client Action
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Server Action
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Features:
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-600">Fast development with Bun</li>
            <li className="text-gray-600">Seamless integration with TailwindCSS</li>
            <li className="text-gray-600">Fullstack capabilities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
