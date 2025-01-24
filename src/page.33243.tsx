import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Welcome to Bun + Tailwind
        </h1>
        <p className="mb-4 text-gray-700">
          This is a fullstack app built with Bun, React, and TypeScript! 🚀
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Click Me!
          </button>
          <p className="mt-4 text-sm text-gray-500">Fast and simple fullstack development!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
