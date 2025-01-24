import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-white text-4xl font-bold mb-5">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-white text-lg mb-10">
        This is a fullstack app built with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3">Client Component</h2>
          <p className="text-gray-700">This section represents the client side using Tailwind CSS for styling.</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-3">Server API</h2>
          <p className="text-gray-700">This section represents the server functionality to handle API requests.</p>
        </div>
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Click Me!
      </button>
    </div>
  );
};

export default App;
