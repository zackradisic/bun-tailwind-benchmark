import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Bun + React + TypeScript
      </h1>
      <p className="text-lg text-gray-200 mb-6">
        This is a demo of how fast and simple it is to build fullstack applications.
      </p>
      <button className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
      <div className="mt-10">
        <h2 className="text-3xl text-white">API Data:</h2>
        <ul className="mt-4 space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-md">
              Sample Data Item {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
