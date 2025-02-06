import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a fullstack application showcasing Bun's amazing capabilities with React and TypeScript.
      </p>
      <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
        Click Me!
      </button>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Server Response:</h2>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
          <p className="text-gray-800">Data will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
