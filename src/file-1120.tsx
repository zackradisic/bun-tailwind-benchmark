import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun + Tailwind App!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demonstration of how fast and simple it is to build fullstack applications with Bun, React, and TypeScript.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-150 ease-in-out">
          Client Button
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-150 ease-in-out">
          API Call
        </button>
      </div>
      <div className="mt-8 p-4 border rounded shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <p className="text-gray-600">This area will display the API response once integrated.</p>
      </div>
    </div>
  );
};

export default App;
