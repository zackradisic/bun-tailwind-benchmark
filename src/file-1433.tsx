import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-xl font-bold flex justify-between items-center shadow-md">
        <h1 className="text-2xl">Bun & Tailwind CSS Demo</h1>
        <nav>
          <a href="/" className="text-white underline hover:text-blue-300 mx-2">Home</a>
          <a href="/dashboard" className="text-white underline hover:text-blue-300 mx-2">Dashboard</a>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Bun with Tailwind!</h2>
        <p className="text-gray-700 mb-6">
          This is a demonstration of how easy it is to build fullstack applications using Bun with React and TypeScript.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-500">
          Get Started
        </button>
      </main>

      <footer className="mt-10 p-4 text-center text-gray-600">
        <p>© 2023 Bun & Tailwind CSS Demo</p>
      </footer>
    </div>
  );
};

export default App;
