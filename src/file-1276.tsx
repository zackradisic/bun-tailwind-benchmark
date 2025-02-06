import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <header className="w-full bg-blue-600 text-white py-4">
        <h1 className="text-3xl text-center">Welcome to Bun + Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-6">
        <section className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Fast Fullstack Development</h2>
          <p className="mb-4">
            Bun makes it simple to build fullstack applications with React and TypeScript. Enjoy rapid development and blazing speed!
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold">API Response</h3>
          <div className="bg-gray-200 p-4 rounded-lg">
            <code className="text-sm text-gray-700">{"GET /api/data"}</code>
          </div>
        </section>
      </main>
      <footer className="w-full bg-blue-600 text-white py-4 mt-auto">
        <p className="text-center">Built with ❤️ using Bun and Tailwind</p>
      </footer>
    </div>
  );
};

export default App;
