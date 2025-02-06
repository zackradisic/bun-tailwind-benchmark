import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="mb-4 text-gray-600">
          This is a demo showcasing the power of Bun's fullstack capabilities, with seamless integration of Tailwind CSS.
        </p>
        <button className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Click Me
        </button>
        <p className="text-sm text-gray-500 text-center">Fast & simple fullstack development!</p>
      </div>
    </div>
  );
};

export default App;
