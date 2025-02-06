import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white w-full p-4 shadow-lg">
        <h1 className="text-3xl font-bold">Bun Fullstack App with Tailwind!</h1>
      </header>
      <main className="flex-1 w-full p-10">
        <section className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Your App!</h2>
          <p className="text-gray-700 mb-6">
            This is a simple demonstration of how fast and easy it is to build fullstack applications with Bun, React & TypeScript.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Click Me!
          </button>
        </section>
      </main>
      <footer className="bg-indigo-600 text-white w-full p-4 text-center">
        <p className="text-sm">Created with ❤️ using Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
