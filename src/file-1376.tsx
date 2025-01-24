import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-500 p-4 shadow-md">
        <h1 className="text-2xl font-bold text-white">Bun & Tailwind Demo</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Build Fast with Bun</h2>
          <p className="mt-2 text-gray-700">
            This is a demonstration of how easy it is to create a fullstack application using Bun, React, and Tailwind CSS!
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </main>
      <footer className="w-full bg-blue-500 p-4 text-center text-white">
        © 2023 Bun Fullstack Development
      </footer>
    </div>
  );
};

export default App;
