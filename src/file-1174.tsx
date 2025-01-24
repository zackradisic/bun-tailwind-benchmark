import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Bun + Tailwind + React</h1>
      <p className="text-lg text-gray-700 mb-6">This is a simple fullstack app using Bun, Tailwind CSS, and React.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">
          API Request
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
          Dashboard
        </button>
      </div>
      <footer className="mt-4 text-sm text-gray-600">
        Powered by <span className="font-medium">Bun</span>
      </footer>
    </div>
  );
};

export default App;
