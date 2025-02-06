import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-5">This is a fullstack app built with Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border border-blue-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold">Server</h2>
          <p className="text-gray-600">Handles API requests.</p>
        </div>
        <div className="p-4 border border-green-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold">Client</h2>
          <p className="text-gray-600">Displays user interface.</p>
        </div>
        <div className="p-4 border border-red-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold">Database</h2>
          <p className="text-gray-600">Stores application data.</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">Built with 💙 using Bun</p>
      </footer>
    </div>
  );
};

export default App;
