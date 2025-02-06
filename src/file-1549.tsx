import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun + Tailwind App!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side</h2>
          <p className="mt-2 text-gray-600">Here is where the magic happens on the client side!</p>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Click Me!
          </button>
        </div>
        <div className="p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Server Side</h2>
          <p className="mt-2 text-gray-600">This handles API calls seamlessly!</p>
          <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            Fetch Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
