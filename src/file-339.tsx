import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white w-full p-4 flex justify-between items-center">
        <h1 className="text-xl">Bun + React + Tailwind</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Bun Fullstack App!</h2>
        <p className="text-lg text-gray-700 mb-8">
          This is a simple demonstration of using Bun with React and TailwindCSS. 
          The speed and simplicity of Bun allow for rapid development!
        </p>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </main>
      <footer className="w-full p-4 text-center bg-gray-800 text-white mt-auto">
        <p>Built with Bun, React, and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
