import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white w-full p-4 text-center">
        <h1 className="text-2xl font-bold">Bun + Tailwind + React</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-xl font-semibold">Welcome to Your Fullstack App!</h2>
        <p className="text-gray-700 mt-4 px-6">
          This is a simple component showcasing the integration of Bun
          with TailwindCSS and React. 
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Click Me
        </button>
      </main>
      <footer className="mt-10 p-4 text-center text-gray-600">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
