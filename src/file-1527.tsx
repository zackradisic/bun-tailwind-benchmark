import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Bun Fullstack Demo!</h1>
      <p className="text-xl text-white mb-8">Building fast applications with React, TypeScript, and Bun is a breeze.</p>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-2">API Data:</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">Fast and simple backend integration with Bun</li>
          <li className="mb-2">Easy routing with `Bun.serve()`</li>
          <li className="mb-2">Incredible development experience</li>
        </ul>
      </div>
      <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
    </div>
  );
};

export default App;
