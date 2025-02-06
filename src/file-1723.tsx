import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-base mb-6 text-center">
          Building fullstack applications with ease using Bun, React, and Tailwind CSS.
        </p>
        <div className="flex flex-col">
          <button className="mb-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Client-Side Action
          </button>
          <button className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300">
            Fetch Server Data
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold">Server Response:</h2>
          <div className="mt-2 p-4 bg-gray-200 rounded-lg">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default App;
