import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 flex items-center justify-center">
      <div className="text-center p-8 shadow-lg rounded-lg bg-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Bun + Tailwind!</h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a demo showcasing the seamless integration of React, TypeScript, and Tailwind CSS using Bun.
        </p>
        <button className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
