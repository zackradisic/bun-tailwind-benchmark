import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="mb-6 text-gray-700">This is a sample fullstack application using Bun, React, and TypeScript.</p>
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Click Me!
          </button>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <p className="text-center text-gray-600">This is a placeholder for your API data!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
