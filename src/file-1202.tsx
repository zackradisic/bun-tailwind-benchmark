import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + Tailwind + React</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack app demo using Bun with Tailwind CSS!</p>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
        Click Me!
      </button>
      <div className="mt-4 w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Server Response:</h2>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
          {/* Replace with real server response */}
          <p>Loading data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
