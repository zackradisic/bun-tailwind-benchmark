import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-gray-700 mb-8">This fullstack app is running with Bun, React, and TypeScript!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="font-semibold text-xl text-green-700">Client-side</h2>
          <p className="text-gray-600">Use React for dynamic UI.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Client Button
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="font-semibold text-xl text-purple-700">Server-side</h2>
          <p className="text-gray-600">Fetch data seamlessly with Bun's server.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Server Button
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="font-semibold text-xl text-red-700">API Integration</h2>
          <p className="text-gray-600">Create powerful APIs with just a few lines of code.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              API Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
