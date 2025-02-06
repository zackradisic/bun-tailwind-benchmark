import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-5xl font-extrabold text-white mb-6">Welcome to Bun & Tailwind</h1>
      <p className="text-lg text-gray-200 mb-8">Experience fast fullstack development.</p>
      
      <div className="flex flex-col bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Client-Side</h2>
        <p className="text-gray-700 mb-4">This part runs in the browser using React.</p>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Click Me
        </button>
      </div>

      <div className="flex flex-col bg-white rounded-lg shadow-lg p-8 mt-6">
        <h2 className="text-3xl font-bold mb-4">Server-Side</h2>
        <p className="text-gray-700 mb-4">This part is handled by Bun.</p>
        <a href="/api/users" className="text-indigo-600 hover:underline">
          Fetch Users
        </a>
      </div>
    </div>
  );
};

export default App;
