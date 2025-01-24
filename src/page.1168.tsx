import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Bun App!</h1>
      <p className="text-lg mb-4">This is a demonstration of Bun's fullstack capabilities with Tailwind CSS.</p>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold">Server Response:</h2>
        <div id="server-response" className="mt-2 text-sm text-gray-600">
          {/* This area will be populated from the server response */}
        </div>
      </div>
    </div>
  );
};

export default App;
