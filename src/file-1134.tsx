import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold">Bun + React + TypeScript</h1>
      </header>
      <main className="flex flex-col items-center justify-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Fullstack App!</h2>
          <p className="text-gray-800 mb-4">
            This is a simple demo showcasing the power of Bun, React, and Tailwind CSS.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Click Me!
          </button>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full p-4 bg-gray-800 text-center text-white">
        <p>Built with 💙 using Bun</p>
      </footer>
    </div>
  );
};

export default App;
