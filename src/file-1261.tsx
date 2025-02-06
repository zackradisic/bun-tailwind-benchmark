import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-5">Welcome to Bun Fullstack App</h1>
      <p className="text-lg text-gray-200 mb-10">This component showcases the power of Bun with React and TypeScript!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300">
          Client Button
        </button>
        <button className="px-4 py-2 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-500 transition duration-300">
          API Request Button
        </button>
      </div>
      <div className="mt-5">
        <h2 className="text-3xl text-white">Server Response:</h2>
        <p className="text-lg text-gray-200">Fetching data dynamically...</p>
      </div>
    </div>
  );
};

export default App;
