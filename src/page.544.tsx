import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="p-5 bg-blue-600 text-white w-full text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun with Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Super Simple Fullstack App</h2>
        <p className="text-lg text-gray-700">
          This is a demonstration of using Bun's new Tailwind integration
          with a fullstack application.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Click Me!
        </button>
      </main>
      <footer className="mt-10 p-5 bg-gray-200 w-full text-center">
        <p className="text-sm text-gray-600">
          Powered by Bun and Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default App;
