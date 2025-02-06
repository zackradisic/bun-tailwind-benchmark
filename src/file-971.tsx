import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to Our Bun App!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of Bun's Tailwind integration and fullstack capabilities.
      </p>
      <div className="flex flex-wrap justify-center space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
          Fetch Users
        </button>
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600">
          Clear Data
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500">User List</h2>
        <ul className="mt-4 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* This will be populated with user data fetched from the server */}
          <li className="px-4 py-2 border-b border-gray-200">User 1</li>
          <li className="px-4 py-2 border-b border-gray-200">User 2</li>
          <li className="px-4 py-2">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
