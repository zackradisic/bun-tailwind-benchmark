import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-600 text-center mb-6">
          This is a simple fullstack application utilizing Bun, React, and TypeScript.
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me!
        </button>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Fast and simple development with Tailwind and Bun!
        </p>
      </div>
    </div>
  );
};

export default App;
