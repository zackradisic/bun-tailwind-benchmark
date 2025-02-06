import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <header className="text-4xl font-extrabold mb-4">
        Welcome to the Bun & Tailwind Demo!
      </header>
      <main className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl mb-2">Fast, Simple, & Powerful!</h1>
        <p className="text-center mb-4">
          Leverage the power of Bun's fullstack capabilities and Tailwind's utility-first styles.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Click Me!
        </button>
        <p className="text-sm mt-4 text-gray-600">
          This button does nothing for now, but it's styled with Tailwind CSS!
        </p>
      </main>
      <footer className="mt-8 text-sm text-gray-500">
        <p>Server rendered with Bun!</p>
      </footer>
    </div>
  );
};

export default App;
