import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Welcome to Bun with TailwindCSS!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Experience the speed and simplicity of fullstack development!
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">API Status</h2>
          <div className="flex flex-col space-y-2">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
              API is running smoothly!
            </div>
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded">
              API has some warnings.
            </div>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              API is down, check your connection.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
