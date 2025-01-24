import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications has never been easier.</p>
      <div className="flex flex-row space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Client Button
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
          Server Button
        </button>
      </div>
      <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">API Response</h2>
        <div className="mt-2 text-gray-600">
          {/* Fetch API Example */}
          <p>Loading data from server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
