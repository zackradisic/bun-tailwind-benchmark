import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to My Bun App!</h1>
      <p className="mt-4 text-lg text-gray-600">This app is built using Bun, React, and TypeScript.</p>
      <div className="flex flex-wrap justify-center mt-10 space-x-4">
        <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
          Client Call
        </button>
        <button className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
          API Call
        </button>
      </div>
      <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-700">Data from Server:</h2>
        {/* Simulated data display area */}
        <ul className="mt-2">
          <li className="py-2 px-4 border-b">User 1</li>
          <li className="py-2 px-4 border-b">User 2</li>
          <li className="py-2 px-4 border-b">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
