import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-6">
          This is a fullstack application showcasing Bun's seamless integration with React, TypeScript, and Tailwind CSS. 
          Let's make beautiful UIs quickly and efficiently.
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Started
        </button>
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">Powered by </span>
          <span className="font-bold text-gray-800">Bun</span>
        </div>
      </div>
    </div>
  );
};

export default App;
