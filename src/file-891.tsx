import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to Bun's Fullstack Integration
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This component demonstrates the power of Bun with React & TypeScript.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
      <div className="mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">API Data:</h2>
        <div className="text-sm text-gray-600">
          {/* This area would typically be populated by fetching data from the server */}
          <code className="bg-gray-200 p-2 rounded">{"[{ 'name': 'User1' }, { 'name': 'User2' }]"}</code>
        </div>
      </div>
    </div>
  );
};

export default App;
