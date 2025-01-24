import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications made simple.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Fetch Data
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Submit Data
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Server Response:</h2>
        <div className="bg-white p-4 rounded shadow-md">
          <p className="text-gray-800">Your data will appear here!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
