import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun + Tailwind</h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Quickly build fullstack applications with React and TypeScript using Bun!
        </p>
        <div className="flex justify-around">
          <div className="bg-blue-200 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800">Client</h2>
            <p className="text-gray-600">This part runs in the browser.</p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800">Server</h2>
            <p className="text-gray-600">This part handles API requests.</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-gray-600 text-center">Using React for UI combined with Bun for a seamless experience.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
