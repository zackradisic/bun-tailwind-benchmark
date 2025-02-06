import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-4xl font-bold text-blue-600 mb-8">
        Welcome to Bun with Tailwind CSS!
      </header>
      <main className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-4">
          Fullstack with Bun, React, and TypeScript
        </h1>
        <p className="mb-4 text-gray-700">
          This is a demonstration of how easily you can build fullstack applications
          using <span className="font-semibold">Bun</span> as your server and 
          <span className="font-semibold">Tailwind CSS</span> for stunning styling.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Click Me!
        </button>
      </main>
      <footer className="mt-8 text-gray-500">
        Powered by Bun
      </footer>
    </div>
  );
};

export default App;
