import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          Experience the speed and simplicity of building fullstack applications with React, TypeScript, and Bun.
        </p>
        <div className="mt-6 flex items-center justify-between">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
        <footer className="mt-6 text-center text-gray-500">
          <p>&copy; 2023 Bun Development</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
