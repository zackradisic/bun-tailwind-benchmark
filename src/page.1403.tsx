import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
      <header className="bg-blue-500 p-4 rounded shadow-lg text-white text-xl w-full text-center">
        <h1>Bun + React + TypeScript + Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Bun App</h2>
          <p className="text-gray-700 text-base mb-4">
            This is a simple demonstration of using Bun's fullstack capabilities with React and Tailwind CSS.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Click Me!
          </button>
        </div>
      </main>
      <footer className="mt-10 text-gray-600">
        <p>Built with 💙 by Bun Team</p>
      </footer>
    </div>
  );
};

export default App;
