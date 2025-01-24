import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">This is an example of a fullstack app using Bun, React, and TypeScript!</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-600">Client Area</h2>
          <p>This section communicates with the API.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Fetch Data</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-600">Admin Area</h2>
          <p>Manage your application settings and data here.</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Admin Dashboard</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-600">Statistics</h2>
          <p>View your application's performance metrics.</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">View Stats</button>
        </div>
      </div>
    </div>
  );
};

export default App;
