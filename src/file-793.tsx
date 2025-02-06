import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg mb-6">This is a simple demonstration of a fullstack application using Bun, React, and TypeScript.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-gray-700">Using Bun's simple setup allows you to develop client-side components effortlessly with TailwindCSS!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-gray-700">The server fetches data and serves your React components just as easily with Bun!</p>
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
