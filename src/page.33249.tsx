import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-base mb-4">
          Experience the speed and simplicity of building fullstack applications with Bun, React, and TypeScript.
        </p>
        <div className="flex justify-around mb-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200">Client Side</button>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-200">Server Side</button>
        </div>
        <div className="text-center">
          <span className="inline-block bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">Bun Powered!</span>
        </div>
      </div>
    </div>
  );
};

export default App;
