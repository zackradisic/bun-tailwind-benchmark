import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to My Bun App</h1>
      </header>
      <main className="flex-grow p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Fast & Simple Development</h2>
        <p className="mt-2 text-gray-600">
          Leveraging Bun and Tailwind CSS for quick fullstack development.
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Click Me
        </button>
      </main>
      <footer className="bg-gray-800 w-full p-4">
        <p className="text-gray-400 text-sm text-center">Powered by Bun & Tailwind</p>
      </footer>
    </div>
  );
};

export default App;
