import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to Bun + React + TypeScript!</h1>
        <p className="text-gray-700 text-center mb-6">This is a demonstration of how fast and simple it is to build fullstack applications with Bun using Tailwind CSS.</p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3">Click Me!</button>
          <p className="text-gray-600">Bun is serving this app on the server!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
