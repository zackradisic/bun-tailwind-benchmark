import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun's Fullstack App!</h1>
      <p className="text-lg text-gray-700 mb-8">Building with Bun, Tailwind, React, and TypeScript is super easy and fast!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Part</h2>
          <p className="text-gray-600">API endpoint to fetch users:</p>
          <code className="block text-sm text-gray-800 bg-gray-200 p-2 rounded">GET /api/users</code>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Part</h2>
          <p className="text-gray-600">Rendering React component on the client:</p>
          <code className="block text-sm text-gray-800 bg-gray-200 p-2 rounded">document.getElementById('root').innerHTML = '&lt;App /&gt;';</code>
        </div>
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me!</button>
      </div>
    </div>
  );
};

export default App;
