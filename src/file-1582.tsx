import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-white mb-8">Building fullstack applications has never been easier!</p>
      <button className="px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        Get Started
      </button>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-2">API Response</h2>
        <div className="h-32 border border-gray-300 rounded p-4 overflow-y-auto">
          {/* Simulate fetching data from the server */}
          <pre className="text-sm text-gray-700">
            {JSON.stringify({ success: true, message: "Hello from the server!" }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
