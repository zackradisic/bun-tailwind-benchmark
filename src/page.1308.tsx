import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4 shadow-lg">
        Welcome to Bun with Tailwind!
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        This is a simple example of a fullstack app using Bun, React, and TypeScript.
      </p>
      <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-2xl text-white mb-2">Data from Server:</h2>
        <ul className="bg-gray-800 rounded-lg p-4">
          {/* Simulated data fetching; use actual fetch in a full app */}
          <li className="text-gray-300">User 1</li>
          <li className="text-gray-300">User 2</li>
          <li className="text-gray-300">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
