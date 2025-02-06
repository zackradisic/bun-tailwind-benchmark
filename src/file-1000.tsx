import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been simpler!</p>
      <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-8 w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
        <pre className="bg-gray-100 p-2 border border-gray-300 rounded-md">Fetching data from the server...</pre>
      </div>
    </div>
  );
};

export default App;
