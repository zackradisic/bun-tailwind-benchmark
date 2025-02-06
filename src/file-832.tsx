import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been easier.</p>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">API Data:</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
            <span className="text-gray-800">User 1</span>
            <span className="text-gray-500">Online</span>
          </li>
          <li className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
            <span className="text-gray-800">User 2</span>
            <span className="text-gray-500">Offline</span>
          </li>
          <li className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
            <span className="text-gray-800">User 3</span>
            <span className="text-gray-500">Online</span>
          </li>
        </ul>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
          Fetch User Data
        </button>
      </div>
    </div>
  );
};

export default App;
