import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This showcase demonstrates how easy it is to integrate Tailwind CSS with Bun and React.
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-10 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Server Data:</h2>
        <ul className="mt-2">
          {/* Fetching data from the server */}
          {/* This would be replaced with actual data-fetching logic */}
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
          <li className="text-gray-600">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
