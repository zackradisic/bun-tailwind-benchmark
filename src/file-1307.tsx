import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple fullstack application using Bun, React, and TypeScript.</p>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        Click Me!
      </button>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">API Data:</h2>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          {/* Fetch and display data from the API here */}
        </div>
      </div>
    </div>
  );
};

export default App;
