import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-700 text-center mb-6">
          This is an example of how fast and simple it is to build fullstack applications
          with Bun, React, and TypeScript using Tailwind CSS.
        </p>
        <div className="flex justify-center mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="text-gray-600 text-center">Check out our API:</span>
          <ul className="list-disc list-inside text-gray-800">
            <li>GET /api/users - Fetches all users</li>
            <li>POST /api/users - Creates a new user</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
