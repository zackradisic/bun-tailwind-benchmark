import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Welcome to the Bun + Tailwind App
        </h1>
        <p className="text-gray-700 text-base mb-6">
          This is a fullstack application powered by Bun, React, and TypeScript!
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me!
        </button>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Fetching data from the server...
        </p>
      </div>
    </div>
  );
};

export default App;
