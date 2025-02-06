import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications just got easier!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-500">Client</h2>
          <p className="text-gray-600 mt-2">This part runs in the browser, powered by React and Tailwind CSS.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-500">Server</h2>
          <p className="text-gray-600 mt-2">This part handles API requests and serves the frontend with Bun's simple setup.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default App;
