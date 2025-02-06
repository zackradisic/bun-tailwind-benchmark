import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Bun Fullstack</h1>
      <p className="text-lg text-white mb-6">Build fast with Bun, React, and TypeScript!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Client Side</h2>
          <p className="text-gray-700">This part of the app runs in the browser and fetches data from the server.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">Fetch Data</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Server Side</h2>
          <p className="text-gray-700">Handles API requests and serves your React app seamlessly.</p>
          <p className="mt-4 text-green-500">API Endpoint: <code>/api/data</code></p>
        </div>
      </div>
    </div>
  );
};

export default App;
