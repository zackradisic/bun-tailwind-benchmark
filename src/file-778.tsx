import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Fetch Data
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Dashboard
        </button>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <pre className="bg-gray-200 p-4 rounded mt-2">
          {JSON.stringify({ message: "Hello from the Bun server!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
