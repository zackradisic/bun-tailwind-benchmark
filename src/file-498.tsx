import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white shadow-md rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-4">This is a demonstration of how quickly and easily you can build a fullstack app using Bun, React, and TypeScript.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Click Me!</button>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-600">Powered by <a href="https://bun.sh" className="text-blue-600 hover:underline">Bun</a></p>
      </footer>
    </div>
  );
};

export default App;
