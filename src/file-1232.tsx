import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        A simple demonstration of fast fullstack development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="p-5 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Frontend</h2>
          <p className="text-gray-600">
            Your React components can utilize Tailwind styles directly!
          </p>
        </div>
        <div className="p-5 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Backend</h2>
          <p className="text-gray-600">
            Built-in API routes with Bun's server functionality, making database calls easy.
          </p>
        </div>
      </div>
      <button className="mt-8 px-5 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default App;
