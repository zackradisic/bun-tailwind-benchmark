import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun + Tailwind!</h1>
        <p className="text-gray-700 mb-4 text-center">
          This is a fullstack application showcasing Bun's server and client capabilities with Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Client Interaction
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Fetch Data from API
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Server Call
          </button>
        </div>
        <footer className="mt-6 text-center">
          <p className="text-gray-500">Built with Bun, React & TailwindCSS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
