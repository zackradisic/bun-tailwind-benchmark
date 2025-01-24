import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to My Fullstack App</h1>
      <p className="text-lg text-gray-700 mb-8">Built with Bun, React, and TypeScript!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Client-side Rendering</h2>
          <p className="text-gray-600">This is where your UI lives.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">API Requests</h2>
          <p className="text-gray-600">Fetch data seamlessly from the server.</p>
        </div>
      </div>
      <button
        className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => fetch('/api/users')
          .then(response => response.json())
          .then(data => console.log(data))}
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
