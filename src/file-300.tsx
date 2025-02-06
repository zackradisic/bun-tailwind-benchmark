import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fast and simple fullstack app using Bun, React, and TypeScript.</p>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md">
        Click me!
      </button>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <div className="mt-2 text-gray-600">
          {/* This section can display data fetched from the server */}
        </div>
      </div>
    </div>
  );
};

export default App;
