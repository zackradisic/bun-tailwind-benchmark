import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Welcome to Bun with Tailwind CSS!
        </h1>
        <p className="text-gray-700 mb-6">
          This is a demo application showcasing how fast you can build fullstack applications using Bun, React, and TypeScript.
        </p>
        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200">
          Get Started
        </button>
        <div className="mt-6 text-center text-gray-500">
          <p>Check the client-server interaction:</p>
          <a href="/api/users" className="text-indigo-600 hover:underline">
            Fetch Users
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
