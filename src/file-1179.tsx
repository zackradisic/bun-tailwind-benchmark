import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Bun with Tailwind
      </h1>
      <p className="text-xl text-white mb-8">
        This is a fullstack application using Bun, React, and TypeScript.
      </p>
      <button className="px-4 py-2 text-lg font-semibold text-blue-500 bg-white rounded shadow hover:bg-blue-100">
        Get Started
      </button>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-yellow-300">Features:</h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>🚀 Fast Development</li>
          <li>⚡ Easy Bundling</li>
          <li>🌈 Beautiful UI with Tailwind CSS</li>
          <li>📦 Fullstack Capabilities</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
