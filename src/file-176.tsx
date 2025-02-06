import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-white shadow w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold text-center text-purple-600">My Bun + React App</h1>
        <nav className="flex justify-around mt-4">
          <a href="/" className="text-lg text-gray-600 hover:text-purple-500">Home</a>
          <a href="/dashboard" className="text-lg text-gray-600 hover:text-purple-500">Dashboard</a>
        </nav>
      </header>
      
      <main className="flex flex-col items-center">
        <section className="p-10 bg-white rounded-lg shadow-md mt-4 w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-gray-800">Welcome to the App!</h2>
          <p className="text-gray-600 mt-2">This app is built with Bun, TypeScript, and React!</p>
          <button className="mt-4 px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-500 transition">
            Click Me!
          </button>
        </section>

        <footer className="mt-8 text-gray-500">
          <p>&copy; 2023 My Bun App</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
