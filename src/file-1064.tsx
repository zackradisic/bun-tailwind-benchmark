import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-4 text-center">Building fullstack apps with Bun, React, and TypeScript has never been easier!</p>
        
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Start Your Project
          </button>
          <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
