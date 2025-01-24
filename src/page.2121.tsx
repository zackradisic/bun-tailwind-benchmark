import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps with ease!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
          Client Action
        </button>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
          Server Call
        </button>
      </div>
    </div>
  );
};

export default App;
