import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Bun + Tailwind Demo</h1>
        <p className="text-gray-700 mb-6">
          Build a fullstack application with Bun, React, and TypeScript like never before!
        </p>
        <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
