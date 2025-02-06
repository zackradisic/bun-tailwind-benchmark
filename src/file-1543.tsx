import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Build fullstack applications quickly with React & TypeScript!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">Fetching API data...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
