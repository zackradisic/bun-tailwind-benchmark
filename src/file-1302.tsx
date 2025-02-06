import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack React application using Bun's server!</p>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-600">Client Side</h2>
          <p className="text-gray-600">This part runs in the browser.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-600">Server Side</h2>
          <p className="text-gray-600">This part handles API requests.</p>
        </div>
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Click Me!
      </button>
    </div>
  );
};

export default App;
