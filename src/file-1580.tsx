import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome to Bun + Tailwind</h1>
          <p className="text-gray-700 text-base mb-4">
            This is a simple demonstration of how you can leverage Bun's fast server and Tailwind CSS integration to build fullstack applications with React and TypeScript.
          </p>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
