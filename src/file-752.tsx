import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-700 mb-6">
          This is a demonstration of using Bun's built-in Tailwind integration
          for an incredibly fast fullstack development experience.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Click Me!
        </button>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-center">Server Response:</h2>
          <div className="mt-2 p-4 bg-gray-200 rounded">
            <p className="text-gray-800">Fetching data from server...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
