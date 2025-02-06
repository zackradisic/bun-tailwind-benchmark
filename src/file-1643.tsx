import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-lg text-center text-gray-700 mb-4">
          This is a demonstration of building fullstack applications using Bun with React and TypeScript.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
          <pre className="bg-gray-200 p-4 rounded mt-2">
            {`Fetch data from the server using Bun's fetch API!`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
