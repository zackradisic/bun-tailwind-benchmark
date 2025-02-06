import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-indigo-600 text-white py-4 w-full text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun & Tailwind Integration</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Hello, User!</h2>
          <p className="text-gray-700 mb-4">You can build fullstack applications with Bun, React, and TypeScript effortlessly!</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-2 w-full text-center">
        <p className="text-sm">&copy; 2023 Bun Integration Demo</p>
      </footer>
    </div>
  );
};

export default App;
