import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Welcome to My Bun App</h1>
      </header>
      <main className="flex-1 container mx-auto p-6">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Using Bun with Tailwind CSS</h2>
          <p className="text-gray-700 mb-4">
            This is a fullstack application built using Bun, React, TypeScript, and Tailwind CSS.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Click Me!
          </button>
        </section>
        <section className="mt-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            onClick={() => fetch("/api/data").then(response => response.json()).then(data => console.log(data))}
          >
            Fetch Data from Server
          </button>
        </section>
      </main>
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-gray-600">Built with 💙 by Bun Team</p>
      </footer>
    </div>
  );
};

export default App;
