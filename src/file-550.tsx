import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-white text-2xl font-bold text-center">Bun + Tailwind + React</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md p-6">
          <h2 className="text-xl font-semibold mb-2">Welcome to Bun Fullstack!</h2>
          <p className="text-gray-700 mb-4">
            This is a simple fullstack application demonstrating how fast and straightforward it is to use Bun with React and TypeScript.
          </p>
          <div className="flex flex-col space-y-4">
            <a href="/api/users" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
              Fetch Users
            </a>
            <a href="/dashboard" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
              Go to Dashboard
            </a>
          </div>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-600 text-sm">© 2023 Bun Fullstack Demo</p>
      </footer>
    </div>
  );
};

export default App;
