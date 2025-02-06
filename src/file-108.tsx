import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">Welcome to Bun with TailwindCSS</h1>
        <p className="text-gray-700 text-base mb-6">
          Build fullstack applications quickly using Bun's server and TailwindCSS for styling.
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
            Get Started
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">API Endpoint:</h2>
          <pre className="bg-gray-200 p-2 rounded-md text-sm text-gray-600">
            {`/api/users`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
