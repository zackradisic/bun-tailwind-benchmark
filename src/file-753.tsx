import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-10 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind</h1>
        <p className="text-lg text-gray-700">This is a demo of Bun's fullstack integration with Tailwind CSS!</p>
        <div className="mt-6">
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
