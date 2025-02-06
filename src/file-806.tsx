import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 shadow-md">
        <h1 className="text-3xl font-bold text-white">Bun & TailwindCSS</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Fullstack Development</h2>
          <p className="text-gray-700 mb-6">
            With Bun's new Tailwind CSS integration, you can create modern web applications with ease!
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 w-full p-4">
        <p className="text-center text-white">Built with Bun, React, & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
