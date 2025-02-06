import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Welcome to the Bun + Tailwind Integration</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center mt-6">
        <p className="text-xl mb-4 text-gray-700">
          This is a fullstack application powered by Bun, React, and TypeScript!
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Fetch Users
        </button>
      </main>
      <footer className="text-center py-4">
        <p className="text-sm text-gray-600">© 2023 Bun Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
