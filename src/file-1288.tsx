import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 shadow-lg">
        <h1 className="text-white text-3xl font-bold text-center">Bun & Tailwind Integration</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Fullstack App!</h2>
          <p className="text-gray-700 mb-6">Experience the speed of using Bun to develop fullstack applications with React & TypeScript!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get Started
          </button>
        </section>
      </main>
      <footer className="bg-gray-800 w-full p-4">
        <p className="text-white text-center">© 2023 Bun & Tailwind Demo</p>
      </footer>
    </div>
  );
};

export default App;
