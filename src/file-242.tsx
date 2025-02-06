import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Bun + TailwindCSS</h1>
        <p className="text-gray-600 mb-6">
          This is a demo showcasing how fast and simple it is to build fullstack applications with Bun using React & TypeScript.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Click Me
        </button>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">API Response:</h2>
          <div className="border border-gray-300 rounded-lg p-4 mt-2">
            <p className="text-gray-500">Fetching data from API...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
