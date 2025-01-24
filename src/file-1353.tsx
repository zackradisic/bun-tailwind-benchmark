import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-6">
          This is a demonstration of how fast and simple it is to build fullstack applications using Bun, React, and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
            Click Me
          </button>
          <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md">
            Another Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
