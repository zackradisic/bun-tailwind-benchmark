import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun's Fullstack App!</h1>
      <div className="flex flex-row space-x-4">
        <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
          Fetch Users
        </button>
        <button className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
          Add User
        </button>
        <button className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition">
          Delete User
        </button>
      </div>
      <div className="mt-6 w-full max-w-md p-5 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between px-4 py-2 bg-gray-200 rounded">
            <span>User 1</span>
            <button className="text-red-500">Remove</button>
          </li>
          <li className="flex justify-between px-4 py-2 bg-gray-200 rounded">
            <span>User 2</span>
            <button className="text-red-500">Remove</button>
          </li>
          <li className="flex justify-between px-4 py-2 bg-gray-200 rounded">
            <span>User 3</span>
            <button className="text-red-500">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
