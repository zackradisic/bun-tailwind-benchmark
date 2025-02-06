import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full py-4">
        <h1 className="text-3xl font-bold text-white text-center">Welcome to Bun + React</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <p className="text-gray-700 mb-2">
            This is an example of a fullstack app using Bun with Tailwind CSS.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Get Started!</button>
        </section>
      </main>
      <footer className="mt-10">
        <p className="text-gray-600">© 2023 Bun Fullstack Demo</p>
      </footer>
    </div>
  );
};

export default App;
