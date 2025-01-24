import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Welcome to Bun with Tailwind
        </h1>
        <p className="text-gray-700 mb-6">
          Experience the speed and simplicity of building fullstack applications with Bun, React, and TypeScript.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
