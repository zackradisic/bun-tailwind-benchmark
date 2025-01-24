import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold text-blue-600 mb-4">
        Welcome to Bun with Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a fullstack application built with Bun, React, and TypeScript.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Server Action
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Client Action
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-medium text-gray-800">
          Tailwind CSS Classes in Action!
        </h2>
        <ul className="mt-4 space-y-2">
          <li className="p-4 bg-white shadow rounded">Item 1</li>
          <li className="p-4 bg-white shadow rounded">Item 2</li>
          <li className="p-4 bg-white shadow rounded">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
