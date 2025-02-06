import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-700 mb-6">This is a simple Bun + React + TypeScript application with Tailwind CSS!</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-6 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Server Response</h2>
        <div className="mt-2 p-2 bg-white rounded shadow-md">
          <p className="text-gray-600">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
