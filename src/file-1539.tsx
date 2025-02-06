import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to Bun!</h1>
        <p className="text-gray-700 text-center mb-6">
          This is a demo of Bun's fast TailwindCSS integration.
        </p>
        <h2 className="text-xl font-semibold mb-2">API Data:</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
          <li className="text-gray-600">User 3</li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default App;
