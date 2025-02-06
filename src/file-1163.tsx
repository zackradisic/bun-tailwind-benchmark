import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-600 mb-4">
          This is a demonstration of using Bun's fullstack capabilities with React and TypeScript, all styled using Tailwind CSS.
        </p>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300">
          Click Me!
        </button>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Fast Development</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Simple Setup</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Fullstack Integration</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
