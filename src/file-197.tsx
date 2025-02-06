import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been easier!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Fetch Users
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">
          View Dashboard
        </button>
      </div>
    </div>
  );
};

export default App;
