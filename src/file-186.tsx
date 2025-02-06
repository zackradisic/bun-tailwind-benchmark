import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="mb-6">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to Bun + Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center">
        <p className="mb-4 text-lg text-gray-700">
          Build fullstack applications quickly with Bun's new Tailwind integration.
        </p>
        <button className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-700 transition duration-200">
          Click Me!
        </button>
      </main>
      <footer className="mt-6">
        <p className="text-sm text-gray-500">Running on Bun server!</p>
      </footer>
    </div>
  );
};

export default App;
