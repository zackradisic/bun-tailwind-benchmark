import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a simple fullstack application showcasing the power of Bun with React and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-500">Client</h2>
          <p className="text-gray-600">This client is rendered using Bun's bundling capabilities.</p>
          <div>
            <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">React</span>
            <span className="bg-green-200 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">TypeScript</span>
            <span className="bg-purple-200 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Tailwind CSS</span>
          </div>
        </div>
        <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-red-500">Server</h2>
          <p className="text-gray-600">This app fetches data using Bun's built-in server capabilities.</p>
          <code className="block bg-gray-100 p-2 rounded text-sm font-mono">GET /api/data</code>
        </div>
      </div>
    </div>
  );
};

export default App;
