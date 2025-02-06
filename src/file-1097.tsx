import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-500 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun's Fullstack App!</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-md">
          <h2 className="text-xl font-semibold mb-4">Bun with TailwindCSS</h2>
          <p className="text-gray-700 mb-4">
            This is a demo component showcasing how fast and simple it is to use Bun for building fullstack applications.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Click me!
          </button>
        </div>
      </main>
      <footer className="bg-blue-500 w-full p-4 text-white text-center">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
