import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 shadow-lg">
        <h1 className="text-center text-3xl text-white">Welcome to My Bun App</h1>
      </header>
      <main className="flex flex-col items-center my-10">
        <section className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
          <h2 className="text-2xl text-gray-800 mb-4">Bun + TailwindCSS + React</h2>
          <p className="text-gray-600 mb-4">
            This component showcases how fast and simple it is to build fullstack applications using Bun as a server with React and TypeScript.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Click Me
          </button>
        </section>
        <footer className="mt-10 text-sm text-gray-500">
          <p>Built with ❤️ using Bun and Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
