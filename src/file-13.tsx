import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun & Tailwind!</h1>
      <p className="text-gray-700 text-lg mb-4">Fast fullstack development made easy.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition duration-300">
          Explore
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="mt-10 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">API Data:</h2>
        <ul className="space-y-2">
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">User 1:</span>
            <span className="text-gray-600">John Doe</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">User 2:</span>
            <span className="text-gray-600">Jane Smith</span>
          </li>
          <li className="flex justify-between pb-2">
            <span className="font-medium">User 3:</span>
            <span className="text-gray-600">Alice Johnson</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
