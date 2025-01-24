import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun Fullstack</h1>
        <p className="text-gray-700 mb-4">This is a simple demonstration of Bun's Tailwind integration.</p>
        <div className="flex justify-between items-center mb-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
            Server Request
          </button>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition">
            Fetch API
          </button>
        </div>
        <div className="text-gray-500 text-center">
          <p>Click to make requests to the server and explore the power of fullstack development!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
