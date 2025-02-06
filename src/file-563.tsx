import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-500 text-white w-full p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Welcome to My Bun App</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Tailwind CSS with Bun!</h2>
          <p className="mb-4 text-gray-700">
            This is an example of how to integrate Tailwind CSS with Bun's fullstack capabilities.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Click Me!
          </button>
        </div>
        <footer className="mt-6 text-gray-600 text-sm">
          <p>&copy; 2023 Bun Fullstack Demo</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
