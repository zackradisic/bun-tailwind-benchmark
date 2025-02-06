import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome to Bun + React + TypeScript
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Experience faster development with Bun's fullstack capabilities!
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
