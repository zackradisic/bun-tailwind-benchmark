import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700">This is a fullstack application using Bun, React, and TypeScript!</p>
      
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition">
          Client Button
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition">
          Server Button
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600">Fast and simple client-side rendering with React and Bun!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Server Side</h2>
          <p className="text-gray-600">Effortlessly handle API requests with Bun's fetch!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
