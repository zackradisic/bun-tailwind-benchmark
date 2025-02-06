import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Bun Fullstack App</h1>
      <p className="text-lg mb-8">This app is powered by Bun, React, TypeScript, and Tailwind CSS!</p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200">
          Client Action
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition duration-200">
          Server Action
        </button>
      </div>
      <div className="mt-8 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold">API Response:</h2>
        <pre className="mt-2 bg-gray-50 p-4 rounded border border-gray-300">
          {/* Fetch and display data from your server here */}
        </pre>
      </div>
    </div>
  );
};

export default App;
