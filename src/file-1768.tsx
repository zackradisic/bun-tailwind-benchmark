import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun + Tailwind!</h1>
      </header>
      <main className="flex-1 w-full flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Fast Fullstack Development</h2>
          <p className="text-gray-700 mb-6">
            Experience seamless integration between your server and client applications.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Click Me
          </button>
        </div>
      </main>
      <footer className="w-full bg-blue-600 p-4 text-white text-center">
        <p className="text-sm">Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
