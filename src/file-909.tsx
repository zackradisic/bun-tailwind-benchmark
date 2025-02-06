import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-600 mb-4">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition">Fetch Users</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition">Create User</button>
      </div>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Users List:</h2>
        <ul className="bg-white shadow-md rounded-md overflow-hidden">
          <li className="px-4 py-2 border-b">User 1</li>
          <li className="px-4 py-2 border-b">User 2</li>
          <li className="px-4 py-2 border-b">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
