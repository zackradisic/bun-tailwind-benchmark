import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="mb-4">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Bun + Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center">
        <p className="text-lg text-gray-700 mb-4">
          This app shows how easy it is to build fullstack applications using Bun, React, and TypeScript!
        </p>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Click Me
        </button>
      </main>
      <footer className="mt-4">
        <p className="text-sm text-gray-500">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
