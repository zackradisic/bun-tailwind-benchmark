import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-4">
        <h1 className="text-3xl font-bold text-center text-blue-700">Welcome to Bun + Tailwind!</h1>
        <p className="text-gray-600 text-center">
          This is a demo of how fast and simple it is to build fullstack applications with Bun, React, and TypeScript.
        </p>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-600">🚀 Fast development with Bun's server.</li>
            <li className="text-gray-600">🎨 Beautiful and responsive UI with Tailwind CSS.</li>
            <li className="text-gray-600">🛠️ Fullstack capability with built-in API support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
