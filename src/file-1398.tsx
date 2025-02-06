import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
      <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-gray-100 mb-8">
        Experience blazing fast development with fullstack capabilities using Bun, React, and TypeScript.
      </p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition hover:bg-gray-100">
        Get Started
      </button>
    </div>
  );
};

export default App;
