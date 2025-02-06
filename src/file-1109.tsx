import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun + Tailwind</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Fast Fullstack Development</h2>
        <p className="text-gray-700 mb-8">
          Build your applications with React and TypeScript using Bun's fast bundler
          and development server.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-white text-center">
        <p className="text-sm">Bun Fullstack Dev Server &copy; 2023</p>
      </footer>
    </div>
  );
};

export default App;
