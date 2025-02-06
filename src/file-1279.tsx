import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun and Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack app using Bun, React, and TypeScript.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">Client Action</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition">Server Action</button>
      </div>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
