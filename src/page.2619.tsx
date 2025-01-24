import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-xl w-full space-y-4 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Welcome to Bun with TailwindCSS
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Experience fast and seamless fullstack development with React, TypeScript, and Tailwind CSS!
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
        </div>
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">API Data</h2>
          {/* Placeholder for API data fetching */}
          <pre className="bg-gray-100 p-2 rounded overflow-auto">Loading data from API...</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
