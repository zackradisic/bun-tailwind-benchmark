import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun Fullstack App!</h1>
      <p className="text-lg text-gray-700 mb-8">Fast and simple fullstack development with Bun, React, and TypeScript!</p>
      <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
        Click Me
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Server Part</h2>
          <p className="text-gray-600">Handle API requests efficiently.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Client Part</h2>
          <p className="text-gray-600">Seamless interaction with the server.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
