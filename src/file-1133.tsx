import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun Fullstack App</h1>
      <p className="text-lg text-gray-700 mb-4">This is a simple fullstack application using Bun, React, and TypeScript.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md">
          Client Button
        </button>
        <button className="px-4 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md">
          Server API Call
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">API Response:</h2>
        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-2 shadow">
            <pre className="text-sm text-gray-900">{JSON.stringify({ message: "This would be an API response" }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
