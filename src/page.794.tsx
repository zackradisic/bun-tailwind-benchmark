import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind CSS</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a simple demo showcasing Bun's fullstack capabilities with React and TypeScript. 
      </p>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">Fast rendering and styling with Tailwind classes!</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Click Me!
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-red-500">Server Side</h2>
          <p className="text-gray-600">Effortless API handling with Bun's powerful backend!</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
            Fetch Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
