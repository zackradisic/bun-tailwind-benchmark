import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Welcome to Bun Fullstack with Tailwind!
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          This app is built with React, TypeScript, and powered by Bun's fast bundling and server capabilities.
        </p>
        <div className="flex flex-col items-center mt-6 space-y-4">
          <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
          <a
            href="/api/users"
            className="text-blue-500 hover:underline"
          >
            Fetch Users
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
