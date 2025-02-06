import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun + React + Tailwind!</h1>
      <p className="mt-4 text-xl text-gray-700">This is a fullstack app powered by Bun.</p>
      <div className="mt-8">
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Click Me!
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Client-Side</h2>
          <p className="mt-2 text-gray-600">This is where the magic happens in the browser.</p>
        </div>
        <div className="p-5 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold">API</h2>
          <p className="mt-2 text-gray-600">Make requests to our server for data.</p>
        </div>
        <div className="p-5 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Fullstack</h2>
          <p className="mt-2 text-gray-600">Enjoy a seamless integration of frontend and backend.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
