import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Bun with Tailwind!
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        This is a fullstack application powered by Bun, React, and TypeScript.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </button>
        <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-2 text-gray-300">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
