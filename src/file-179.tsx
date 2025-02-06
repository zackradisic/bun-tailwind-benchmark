import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg mb-8">This is a demonstration of a fullstack app using Bun, React, and TypeScript.</p>
      <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-md">
        <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200">
          Click Me!
        </button>
        <div className="flex items-center justify-between p-4 bg-gray-200 rounded border border-gray-300">
          <span className="font-medium">Bun is fast!</span>
          <span className="font-bold text-xl">🚀</span>
        </div>
      </div>
    </div>
  );
};

export default App;
