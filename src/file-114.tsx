import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-600">Welcome to Bun & Tailwind!</h2>
        <p className="text-gray-600 text-center">
          It's fast and simple to build fullstack applications with React, TypeScript, and Bun's new tailwind integration.
        </p>
        <div className="flex justify-between">
          <button className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Get Started
          </button>
          <button className="text-gray-600 border border-gray-300 hover:bg-gray-100 rounded-lg px-5 py-2.5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
