import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun's Fullstack App
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This app showcases the seamless integration of Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Side</h2>
          <p className="text-gray-600">
            Rendered with React, utilizing Tailwind CSS for styling. Combine UI components effortlessly!
          </p>
          <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Click Me
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Side</h2>
          <p className="text-gray-600">
            Fetch API data seamlessly using Bun's powerful backend capabilities.
          </p>
          <button className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
            Fetch Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
