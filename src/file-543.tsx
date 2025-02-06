import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-center text-white">
        <h1 className="text-3xl font-bold">Welcome to Bun with TailwindCSS!</h1>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Fast Fullstack Development</h2>
        <p className="mt-4 text-lg text-gray-600">
          Experience blazing fast development with Bun and TailwindCSS!
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </main>
      <footer className="bg-blue-600 w-full p-4 text-center text-white">
        <p className="text-sm">© 2023 Bun Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
