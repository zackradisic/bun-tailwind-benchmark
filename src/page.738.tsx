import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Client Button</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Server Button</button>
      </div>
      <div className="mt-10 p-5 border border-gray-300 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Server Response:</h2>
        <div className="bg-gray-200 p-3 rounded">Fetch data from server here!</div>
      </div>
    </div>
  );
};

export default App;
