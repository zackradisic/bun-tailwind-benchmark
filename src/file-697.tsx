import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
        <p className="text-gray-700 text-center mb-6">
          This is a simple application showcasing the speed of Bun's fullstack capabilities with React & TypeScript.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <a
            href="/api/users"
            className="block text-center bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Fetch Users
          </a>
          <a
            href="/dashboard"
            className="block text-center border border-blue-500 text-blue-500 font-semibold py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Go to Dashboard
          </a>
        </div>
        <footer className="mt-8 text-center text-gray-500">
          Built with 💙 using Bun, React, and Tailwind CSS
        </footer>
      </div>
    </div>
  );
};

export default App;
