import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-center text-gray-700 mb-6">
          This is a fullstack application powered by Bun, React, and TypeScript.
        </p>
        <div className="flex flex-col space-y-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me!
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Another Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
