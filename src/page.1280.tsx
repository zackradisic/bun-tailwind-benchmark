import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-500 text-white w-full p-5 text-center shadow-lg">
        <h1 className="text-4xl font-bold">Welcome to Bun with Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white rounded-lg shadow-md p-5 w-80">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">Quick Start</h2>
          <p className="text-gray-600 mb-4">
            Build fullstack apps effortlessly using Bun, React, and TypeScript.
          </p>
          <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-400 transition duration-150">
            Get Started
          </button>
        </section>
      </main>
      <footer className="absolute bottom-0 w-full text-center p-4 bg-gray-200">
        <p className="text-gray-600">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
