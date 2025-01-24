import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">Here's a simple fullstack application using Bun's server and client integration.</p>
      <div className="flex flex-row space-x-4">
        <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded transition duration-300">
          Server Endpoint
        </button>
        <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-700 rounded transition duration-300">
          Client Action
        </button>
      </div>
      <ul className="mt-6 space-y-4">
        <li className="p-4 bg-white shadow rounded-lg">Data Item 1</li>
        <li className="p-4 bg-white shadow rounded-lg">Data Item 2</li>
        <li className="p-4 bg-white shadow rounded-lg">Data Item 3</li>
      </ul>
    </div>
  );
};

export default App;
