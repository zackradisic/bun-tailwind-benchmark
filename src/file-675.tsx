import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Bun + Tailwind CSS</h1>
        <p className="text-gray-600 text-center mb-6">
          Experience the speed and simplicity of building fullstack applications with Bun, React, and TypeScript!
        </p>
        <div className="flex items-center justify-evenly">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition duration-200">
            Server Action
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-200">
            Client Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
