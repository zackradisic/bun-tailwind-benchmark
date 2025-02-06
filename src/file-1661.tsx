import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-3xl font-bold text-white text-center">Bun + React + Tailwind</h1>
      </header>
      <main className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Your Bun Application!</h2>
        <p className="text-gray-600">
          This is a simple demonstration of a fullstack application with tailwind and Bun.
        </p>
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </main>
      <footer className="w-full p-4 mt-auto bg-gray-800">
        <p className="text-center text-white">Powered by Bun, React, and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
