import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Welcome to Bun & Tailwind!</h1>
        <p className="text-gray-700 text-center mb-6">Building fullstack applications has never been easier.</p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
          <span className="mt-4 text-sm text-gray-500">Fast, simple and productive</span>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-center text-blue-500">API Requests</h2>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Fetch Users</button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
