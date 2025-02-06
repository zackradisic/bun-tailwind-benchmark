import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-500 text-white w-full p-4 shadow-md">
        <h1 className="text-3xl font-bold">Bun + Tailwind + React</h1>
      </header>
      
      <main className="flex-1 p-10 text-center">
        <h2 className="text-2xl mb-4">Fast Fullstack Development</h2>
        <p className="text-lg text-gray-700 mb-8">
          Experience lightning-fast development with Bun, Tailwind CSS, and React. 
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          Click Me
        </button>
      </main>

      <footer className="bg-gray-800 text-white p-4 w-full text-center">
        <p className="text-sm">Built with 💙 using Bun and Tailwind</p>
      </footer>
    </div>
  );
};

export default App;
