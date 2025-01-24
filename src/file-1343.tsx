import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to My Bun App!</h1>
        <p className="text-gray-700 text-base mb-4">This is a demo of Bun's fullstack capabilities with React & TypeScript.</p>
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">
            Click Me!
          </button>
        </div>
        <div className="mt-4 text-center">
          <span className="text-gray-500 text-sm">Fast & Easy Development with Bun!</span>
        </div>
      </div>
    </div>
  );
};

export default App;
