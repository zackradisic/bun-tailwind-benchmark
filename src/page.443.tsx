import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun & Tailwind App!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application built with Bun, React, and TypeScript.</p>
      
      <div className="space-y-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
          Click me!
        </button>
        <button className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
          Another Action
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-500">Fetch API Data</h2>
        <button
          onClick={async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            console.log(data);
          }}
          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
