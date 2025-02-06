import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Fullstack App</h1>
      <p className="text-lg text-gray-700 mb-8">Built with Bun, React, TypeScript, and Tailwind CSS</p>
      <div className="flex flex-row space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-700 transition duration-300">Client Action</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-700 transition duration-300">Server Action</button>
      </div>
      <div className="mt-8 p-4 border border-gray-300 rounded">
        <h2 className="text-2xl font-semibold text-gray-800">API Response:</h2>
        <pre className="text-sm text-gray-600">
          {/* Here you might implement a fetch to your API */}
          {JSON.stringify({ message: "Data fetched from Bun API!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
