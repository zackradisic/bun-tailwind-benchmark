import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-center text-gray-700 mb-4">
          This is a simple fullstack application using Bun, React, and TypeScript
        </p>
        <div className="flex justify-center">
          <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-indigo-600 transition">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
