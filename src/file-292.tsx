import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4">
        <h1 className="text-3xl font-bold text-center">Bun & Tailwind Demo</h1>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-4">Fast and Simple Fullstack Development</h2>
        <p className="mb-8 text-center max-w-md">
          With Bun's new Tailwind integration, building fullstack applications has never been more efficient! Experience the speed and simplicity today.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Get Started
        </button>
      </main>
      <footer className="bg-gray-800 text-white w-full p-4">
        <p className="text-center">© 2023 Bun, Inc.</p>
      </footer>
    </div>
  );
};

export default App;
