import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to My Bun Application!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a simple fullstack application using Bun, React, and TypeScript.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
          Click Me
        </button>
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
          Another Button
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">API Response:</h2>
        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-2 shadow-lg">
          {/* API Response will be displayed here */}
          <p className="text-sm text-gray-500">Fetching data from API...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
