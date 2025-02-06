import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Welcome to Bun with Tailwind CSS!
        </h1>
        <p className="text-gray-600 mb-4">
          This is a demo of Bun's new Tailwind integration.
        </p>
        <div className="flex justify-between mb-4">
          <span className="text-sm text-gray-500">Server</span>
          <span className="text-sm text-gray-500">Client</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-blue-100 rounded-md">
          <span className="text-blue-600 font-semibold">Fast API</span>
          <span className="text-blue-600 font-semibold">Smooth UI</span>
        </div>
        <p className="text-gray-600 mt-4">
          Build your fullstack apps quickly with Bun and Tailwind!
        </p>
      </div>
    </div>
  );
};

export default App;
