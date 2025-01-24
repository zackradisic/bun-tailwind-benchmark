import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun with TailwindCSS!</h1>
      <p className="mb-8 text-lg text-gray-700">
        This is a demo component to showcase how fast and simple it is to build fullstack applications with Bun, React, and TypeScript!
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-400">
          Fetch Users
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-400">
          Create User
        </button>
      </div>
      <div className="mt-10 p-5 border border-gray-300 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-2">User List:</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-700">User 1</li>
          <li className="text-gray-700">User 2</li>
          <li className="text-gray-700">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
