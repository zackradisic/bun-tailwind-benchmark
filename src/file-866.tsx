import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome to Bun with Tailwind CSS!
        </h1>
        <p className="text-gray-600 mb-6">
          Experience the amazing speed and simplicity of building fullstack applications with React and TypeScript.
        </p>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-400 transition duration-200">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
