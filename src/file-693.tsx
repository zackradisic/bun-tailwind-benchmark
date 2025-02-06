import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Welcome to My Bun App!
        </h1>
        <p className="text-gray-700 text-base mb-4">
          This is a simple example showcasing Bun's new Tailwind integration.
        </p>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
          Click Me
        </button>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            This button will fire an API request!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
