import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-5">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-4">
          This is a demo showing the power of Bun and Tailwind integration for building fullstack applications.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold">Server-Side Logic</h2>
            <p className="text-gray-600">
              The server seamlessly responds to API requests using Bun's built-in capabilities.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold">Client-Side Rendering</h2>
            <p className="text-gray-600">
              Dive into the React world with simple, fast, and intuitive client-side rendering.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
