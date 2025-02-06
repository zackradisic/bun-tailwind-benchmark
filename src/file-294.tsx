import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-base text-center mb-4">
          Experience the lightning-fast development with Bun, React, and TypeScript.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
