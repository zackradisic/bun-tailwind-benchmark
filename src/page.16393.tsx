import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Welcome to Bun with Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Fast and Simple Fullstack Development</h2>
          <p className="text-gray-700 mb-4">
            Build fullstack applications effortlessly with Bun, React, and TypeScript. This is a demo of our user interface.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-blue-600 text-white w-full p-4 text-center">
        <p>© 2023 Bun Development</p>
      </footer>
    </div>
  );
};

export default App;
