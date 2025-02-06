import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun</h1>
      <p className="text-xl text-gray-700 mb-5">Fullstack development made easy with Bun, React, and TypeScript!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg">Get Started</button>
        <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg">Learn More</button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <div className="flex flex-col space-y-2 mt-5">
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-medium text-gray-900">User 1</h3>
            <p className="text-gray-600">Details about User 1...</p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-medium text-gray-900">User 2</h3>
            <p className="text-gray-600">Details about User 2...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
