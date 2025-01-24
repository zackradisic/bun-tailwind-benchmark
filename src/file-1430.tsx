import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">This is a fullstack application built with React, TypeScript, and Tailwind CSS.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300">
          Client Action
        </button>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition duration-300">
          Server Action
        </button>
      </div>
      <footer className="mt-8">
        <p className="text-sm text-gray-300">Built with 🌟 using Bun & Tailwind</p>
      </footer>
    </div>
  );
};

export default App;
