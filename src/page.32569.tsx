import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">
        This is a fullstack application built with Bun, React, and TypeScript.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 font-semibold text-sm bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
          Client Button
        </button>
        <button className="px-4 py-2 font-semibold text-sm bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition duration-300">
          API Request
        </button>
      </div>
      <div className="mt-8">
        <p className="text-white">Data from API will appear here:</p>
        <div className="p-4 bg-white rounded-lg shadow-lg mt-2">
          <p className="text-black">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
