import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition transform hover:-translate-y-1">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Data from Server:</h2>
        <ul className="mt-4 space-y-2">
          {/* Simulating data fetch from an API */}
          <li className="bg-white shadow rounded p-4">User 1: John Doe</li>
          <li className="bg-white shadow rounded p-4">User 2: Jane Smith</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
