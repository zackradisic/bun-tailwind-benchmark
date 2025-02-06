import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">Welcome to Bun + Tailwind</h1>
        <p className="text-gray-700 mb-4">This is a simple demo showcasing how fast and easy it is to create fullstack applications with Bun, React, and TypeScript.</p>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Click Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
