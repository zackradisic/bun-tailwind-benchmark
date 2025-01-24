import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack application built with Bun, React, and TypeScript.
      </p>
      <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Data from Server:</h2>
        <ul className="mt-4 space-y-2">
          <li className="bg-white p-4 rounded-lg shadow-md">
            Item 1
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Item 2
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            Item 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
