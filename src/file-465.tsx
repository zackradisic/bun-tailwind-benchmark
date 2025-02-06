import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Bun & Tailwind Demo</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="p-6 bg-white shadow rounded-lg max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Welcome to Bun!</h2>
          <p className="text-gray-700 mb-4">
            This demo showcases the speed and simplicity of building fullstack
            applications using Bun, React, and TypeScript.
          </p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click Me
          </button>
        </section>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-white text-center">
        <p className="text-sm">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
