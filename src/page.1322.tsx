import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Bun & Tailwind</h1>
        <p className="text-gray-700 text-center mb-6">Building fullstack applications with Bun, React, and TypeScript has never been easier!</p>
        
        <div className="grid gap-4">
          <a href="/api/users" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Fetch Users</a>
          <a href="/dashboard" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Go to Dashboard</a>
          <a href="/" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">Home</a>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Powered by <span className="font-semibold">Bun</span> and <span className="font-semibold">Tailwind CSS</span></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
