import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-6">This is a simple fullstack application built with Bun, React, and TypeScript.</p>
        <div className="flex justify-center mb-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-400 transition">
            Click Me!
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Fast & simple development with Bun!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
