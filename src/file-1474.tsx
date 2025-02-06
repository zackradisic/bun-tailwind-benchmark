import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full py-4 shadow">
        <h1 className="text-white text-3xl text-center">Welcome to My Bun App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl mb-4">Built with Bun, React & TypeScript</h2>
        <p className="text-lg text-gray-700 mb-6">This is a demonstration of using Tailwind CSS with Bun.</p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Click Me
        </button>
      </main>
      <footer className="absolute bottom-0 w-full py-4 bg-gray-200">
        <p className="text-center text-sm text-gray-600">Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
