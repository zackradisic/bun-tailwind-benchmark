import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-6 text-white text-center">
        <h1 className="text-3xl font-bold">Bun & TailwindCSS Demo</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Fast & Simple Fullstack Development</h2>
        <p className="text-lg mb-6">Using Bun with React and TypeScript has never been easier!</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ease-in-out duration-300">
          Click Me
        </button>
      </main>
      <footer className="absolute bottom-0 w-full p-4 text-center bg-gray-200">
        <p className="text-sm">Powered by Bun, React, and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
