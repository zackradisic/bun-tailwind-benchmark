import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
        <p className="text-gray-700 mb-4">
          This is a full-stack application built using Bun, React, and TypeScript.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Click Me
        </button>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Server Response:</h2>
          <div className="text-gray-600">
            {/* Fetch data from the server here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
