import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun + Tailwind CSS!</h1>
      <p className="mb-8 text-lg">
        Experience the power of fullstack development with Bun and React.
      </p>
      <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          <li className="mb-1">🌪 Fast Backend Integration</li>
          <li className="mb-1">📦 Easy Bundling with ESM</li>
          <li className="mb-1">🎨 Tailwind CSS for Styling</li>
          <li>⚡️ Instant Server & Client Rendering</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
