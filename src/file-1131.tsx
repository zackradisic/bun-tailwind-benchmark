import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl mb-4 font-semibold">Fast & Fullstack</h2>
          <p className="text-gray-700 mb-6">
            Utilizing Bun's integration with Tailwind CSS, building fullstack applications has never been easier!
          </p>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Bun Integration Demo</p>
      </footer>
    </div>
  );
};

export default App;
