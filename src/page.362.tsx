import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-2xl font-bold text-center">
        Welcome to Bun with Tailwind!
      </header>
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Fast and Simple Fullstack Development
        </h1>
        <p className="text-gray-700 mb-4">
          Build fullstack applications effortlessly using Bun, React, and TypeScript.
        </p>
        <a
          href="/api/users"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Users API
        </a>
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold">User List</h2>
          <ul id="user-list" className="divide-y divide-gray-300 mt-2"></ul>
        </div>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-white text-center">
        &copy; 2023 Bun Fullstack Demo
      </footer>
    </div>
  );
};

export default App;
