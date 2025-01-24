import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-4">Build fullstack applications effortlessly.</p>
      
      <div className="space-y-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Get Started
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
          View Documentation
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">API Endpoint:</h2>
        <code className="bg-gray-200 p-2 rounded-md">GET /api/users</code>
      </div>
    </div>
  );
};

export default App;
